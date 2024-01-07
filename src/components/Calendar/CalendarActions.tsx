import { ReactNode } from "react"

interface CalendarActionProps {
  children: ReactNode;
}

export function CalendarAction({children}: CalendarActionProps) {
  return (
    <div className="flex gap-2 text-gray200" >
      {children}
    </div>
  )
}