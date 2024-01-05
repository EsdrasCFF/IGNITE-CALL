"use client"

import { Children, ReactNode } from "react"

interface UserHeaderProps {
  children: ReactNode;
}

export function UserHeader({children}: UserHeaderProps) {
  return (
    <header className="flex flex-col items-center" >
      {children}
    </header>
  )
}