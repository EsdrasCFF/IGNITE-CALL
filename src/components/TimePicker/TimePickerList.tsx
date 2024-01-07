import { ReactNode } from "react";

interface TimePickerListProps {
  children: ReactNode;
}

export function TimePickerList ({children}: TimePickerListProps) {
  return (
    <div className="mt-3 grid grid-cols-[1fr] gap-2 timer-picker-list-display">
      {children}
    </div>
  )
}