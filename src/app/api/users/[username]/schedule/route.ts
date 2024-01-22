import { prisma } from "@/lib/prisma";
import dayjs from "dayjs";
import { NextRequest, NextResponse } from "next/server";
import '@/lib/dayjs'
import { z } from "zod";

interface MethodProps {
  params: {username: string};
}

const createSchedulingBody = z.object({
  name: z.string(),
  email: z.string().email(),
  observations: z.string(),
  date: z.string().datetime()
})

type FormDate = z.infer<typeof createSchedulingBody>

export async function POST(request: NextRequest, {params}: MethodProps) {
  const username = params.username;

  const {name, email, observations, date}: FormDate = await request.json()

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

  const schedulingDate = dayjs(date).startOf('hour')

  if (schedulingDate.isBefore(new Date())) {
    return new NextResponse(
      JSON.stringify({ message: "Date is in the past!" }),
      { status: 400 }
    );
  }

  const conflictingScheduling = await prisma.scheduling.findFirst({
    where: {
      user_id: user.id,
      date: schedulingDate.toDate()
    }
  })

  if(conflictingScheduling) {
    return new NextResponse(
      JSON.stringify({message: "Already scheduling existis on this date!"}),
      {status: 400}
    )
  }

  await prisma.scheduling.create({
    data: {
      name,
      email,
      observations,
      date: schedulingDate.toDate(),
      user_id: user.id,
    }
  })

  return new NextResponse('Success',{status: 201})
}