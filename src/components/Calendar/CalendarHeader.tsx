import { ReactNode } from "react"

interface CalendarHeaderProps {
  children: ReactNode;
}

export function CalendarHeader({children}: CalendarHeaderProps) {
  return (
    <div>
      {children}
    </div>
  )
}