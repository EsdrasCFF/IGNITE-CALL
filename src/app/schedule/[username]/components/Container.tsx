"use client"

import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode;
}

export function Container({children}: ContainerProps) {
  return (
    <div className=" flex flex-col items-center justify-center max-w-3xl px-4 mt-20 mb-4 mx-auto" >
      {children}
    </div>
  )
}