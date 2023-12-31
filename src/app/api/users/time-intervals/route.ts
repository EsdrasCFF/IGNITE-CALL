import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

interface IntervalRequestBody {
  weekDay: number;
  startTimeInMinutes: number;
  endTimeInMinutes: number;
}


export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)
  const {intervals} = await request.json() as {intervals: IntervalRequestBody[]} // request body

  await Promise.all(
    intervals.map((interval) => {
      return prisma.userTimeInterval.create({
        data: {
          week_day: interval.weekDay,
          start_time_in_minutes: interval.startTimeInMinutes,
          end_time_in_minutes: interval.endTimeInMinutes,
          user_id: session?.user?.id as string
        }
      })
    })
  )

  return NextResponse.json({}, {status: 201})
}