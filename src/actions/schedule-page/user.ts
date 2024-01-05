"use server"

import { prisma } from "@/lib/prisma"

export async function dataUser(username: string) {
  const user = await prisma.user.findUnique({
    where: {
      username
    },
  })

  if(!user) {
    return null
  }

  return user;
}