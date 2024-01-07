import { ReactNode } from "react"

interface TimePickerProps {
  children: ReactNode;
}
export function TimePicker({children}: TimePickerProps) {
  return (
    <div className="border-l border-solid border-gray600 px-6 pt-6 overflow-y-scroll absolute top-0 bottom-0 right-0 w-[280px]">
      {children}
    </div>
  )
}