import { prisma } from "@/lib/prisma";
import dayjs from "dayjs";
import { NextRequest, NextResponse } from "next/server";
import '@/lib/dayjs'

interface MethodProps {
  params: {username: string};
}

export async function GET(request: NextRequest, {params}: MethodProps) {
  const username = params.username;
  const month = request.nextUrl.searchParams.get('month')
  const year = request.nextUrl.searchParams.get('year')
  
  if(!year || !month) {
    const responseDate = {
      message: 'Year or Month not specified!'
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

  const availableWeekDays = await prisma.userTimeInterval.findMany({
    select: {
      week_day: true
    },
    where: {
      user_id: user.id
    }
  })

  const allDAys = [0, 1, 2, 3, 4, 5, 6] // Number week days

  const blockedWeekDays = allDAys.filter((day) => {
    return !availableWeekDays.some(availableDay => availableDay.week_day === day)
  })
  
  return NextResponse.json({
    blockedWeekDays
  })
}