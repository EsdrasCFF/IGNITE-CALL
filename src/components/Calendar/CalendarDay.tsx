

import { ReactNode, MouseEvent } from "react"

interface CalendarDayProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export function CalendarDay({children, disabled=false, onClick}: CalendarDayProps) {
  return (
    <button onClick={onClick} disabled={disabled} className="
      w-full aspect-square bg-gray600 text-center cursor-pointer rounded-md 
      focus:outline focus:text-gray100
      disabled-button
      ">
      {children}
    </button>
  )
}