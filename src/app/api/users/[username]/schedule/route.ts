import { prisma } from "@/lib/prisma";
import dayjs from "dayjs";
import { NextRequest, NextResponse } from "next/server";
import '@/lib/dayjs'
import { z } from "zod";
import { google } from "googleapis";
import { getGoogleOAuthToken } from "@/lib/google";

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

  const scheduling = await prisma.scheduling.create({
    data: {
      name,
      email,
      observations,
      date: schedulingDate.toDate(),
      user_id: user.id,
    }
  })

  const calendar = google.calendar({
    version: 'v3',
    auth: await getGoogleOAuthToken(user.id)
  })

  await calendar.events.insert({
    calendarId: 'primary',
    conferenceDataVersion: 1,
    requestBody: {
      summary: `Ignite Call: ${name}`,
      description: observations,
      start: {
        dateTime: schedulingDate.format()
      },
      end: {
        dateTime: schedulingDate.add(1, 'hour').format()
      },
      attendees: [{email, displayName: name}],
      conferenceData: {
        createRequest: {
          requestId: scheduling.id,
          conferenceSolutionKey: {
            type: 'hangoutsMeet',
          },
        },
      },
    },
  })

  return new NextResponse('Success',{status: 201})
}