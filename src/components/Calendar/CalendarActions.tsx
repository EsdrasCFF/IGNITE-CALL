import { ReactNode } from "react"

interface CalendarActionProps {
  children: ReactNode;
}

export function CalendarAction({children}: CalendarActionProps) {
  return (
    <div>
      {children}
    </div>
  )
}