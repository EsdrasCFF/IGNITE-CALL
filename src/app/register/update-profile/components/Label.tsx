import { ReactNode } from "react"

interface LabelProps {
  children: ReactNode;
}

export function Label({children}: LabelProps) {
  return(
    <label className="flex flex-col gap-2" >
      {children}
    </label>
  )
}