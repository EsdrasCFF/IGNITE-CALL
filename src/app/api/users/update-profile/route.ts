import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

interface ProfileDataRequestBody {
  bio: string;
}


export async function PUT(request: NextRequest) {
  const session = await getServerSession(authOptions)
  const bio = await request.json() as ProfileDataRequestBody

  await prisma.user.update({
    where: {
      id: session?.user.id,
    },
    data: bio
  }) 


  return NextResponse.json({}, {status: 204})
}