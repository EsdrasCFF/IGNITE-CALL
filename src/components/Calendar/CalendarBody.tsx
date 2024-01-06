import { ReactNode } from "react";

interface CalendarBodyProps {
  children: ReactNode;
}

export function CalendarBody({children}: CalendarBodyProps) {
  return (
    <table>
      {children}
    </table>
  )
}