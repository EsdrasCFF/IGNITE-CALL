import { ReactNode } from "react"

interface CalendarDayProps {
  children: ReactNode;
}

export function CalendarDay({children}: CalendarDayProps) {
  return (
    <button>
      {children}
    </button>
  )
}