import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  const body = await request.json()
  
  const userExists = await prisma.user.findUnique({
    where: {
      username: body.username
    }
  })
  
  if(userExists) {
    let message = {
      status: 'fail',
      message: 'O username já está em uso!'
    }
    
    return new NextResponse(JSON.stringify(message), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  
  const user = await prisma.user.create({
    data: {
      name: body.name,
      username: body.username
    }
  })

  cookies().set('@ignitecall:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, //7 days
    path: '/'
  })

  return new NextResponse(JSON.stringify(user), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  }) 
}
