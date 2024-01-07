import { ReactNode } from "react";

interface CalendarBodyProps {
  children: ReactNode;
}

export function CalendarBody({children}: CalendarBodyProps) {
  return (
    <table className="w-full border-spacing-1 table-fixed" >
      {children}
    </table>
  )
}