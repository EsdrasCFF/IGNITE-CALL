import { ReactNode } from "react"

interface CalendarDayProps {
  children: ReactNode;
  disabled?: boolean;
}

export function CalendarDay({children, disabled=false}: CalendarDayProps) {
  return (
    <button  disabled={disabled} className="
      w-full aspect-square bg-gray600 text-center cursor-pointer rounded-md 
      focus:outline focus:text-gray100
      disabled-button
      ">
      {children}
    </button>
  )
}