import { ReactNode } from "react";

interface TimePickerHeaderProps {
  children: ReactNode;
}

export function TimePickerHeader ({children}: TimePickerHeaderProps) {
  return (
    <p className="font-medium" >
      {children}
    </p>
  )
}