import { prisma } from "@/lib/prisma";
import dayjs from "dayjs";
import { NextRequest, NextResponse } from "next/server";
import '@/lib/dayjs'

interface MethodProps {
  params: {username: string};
}

export async function GET(request: NextRequest, {params}: MethodProps) {
  const username = params.username;
  const date = request.nextUrl.searchParams.get('date')

  if(!date) {
    const responseDate = {
      message: 'Date not found!'
    }

    return NextResponse.json(responseDate)
  }

  const user = await prisma.user.findUnique({
    where: {
      username
    }
  }) 

  if(!user) {
    const responseUser = {
      message: 'User does not exists!'
    }
    
    return NextResponse.json(responseUser)
  }

  const referenceDate = dayjs(date)
  const isPastDay = referenceDate.endOf('day').isBefore(new  Date())

  if(isPastDay) {
    return NextResponse.json({availability: []})
  }

  const userAvailability = await prisma.userTimeInterval.findFirst({
    where: {
      user_id: user!.id,
      week_day: referenceDate.get('day')
    }
  })

  if(!userAvailability) {
    return NextResponse.json({availability: []})
  }
  
  const startHour = userAvailability!.start_time_in_minutes / 60
  const endHour = userAvailability!.end_time_in_minutes / 60

  const possibleTimes = Array.from({
    length: endHour - startHour,
  }).map((_, i) => { 
    return startHour + i
  })

  const blockedTimes = await prisma.scheduling.findMany({
    select: {
      date: true
    },
    where: {
      user_id: user.id,
      date: {
        gte: referenceDate.set('hour', startHour).toDate(),
        lte: referenceDate.set('hour', endHour).toDate(),
      }
    }
  })

  const availableTimes = possibleTimes.filter((time) => {
    return !blockedTimes.some((blockedTime) => blockedTime.date.getHours() === time)
  })

  return NextResponse.json({
    possibleTimes, availableTimes
  })
}