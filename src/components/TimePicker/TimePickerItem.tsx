import { ReactNode } from "react";

interface TimerPickerItemProps {
  children: ReactNode;
  disabled?: boolean; 
}

export function TimePickerItem({children, disabled}: TimerPickerItemProps) {
  return (
    <button disabled={disabled} className="border-[0] bg-gray600 py-2 px-0 cursor-pointer text-gray100 rounded-sm font-medium leading-normal disabled-button" >
      {children}
    </button>
  )
}