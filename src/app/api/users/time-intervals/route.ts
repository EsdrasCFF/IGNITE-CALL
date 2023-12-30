import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)
  const body = await request.json()

  console.log(session)
  console.log('body' + body)

  return new NextResponse(JSON.stringify(body), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  }) 
}