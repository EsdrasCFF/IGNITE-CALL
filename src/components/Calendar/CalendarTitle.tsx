  import { ReactNode } from "react"

  interface CalendarTitleProps {
    children: ReactNode;
  }

  export function CalendarTitle({children}: CalendarTitleProps) {
    return (
      <p className="font-medium" >
        {children}
      </p>
    )
  }