import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json()

  
  const userExists = await prisma.user.findUnique({
    where: {
      username: body.username
    }
  })
  
  if(userExists) {
    let response = {
      status: 'fail',
      message: 'O username já está em uso!'
    }
    
    return new NextResponse(JSON.stringify(response), {
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
  
  return new NextResponse(JSON.stringify(user), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  }) 
}
