import { ReactNode } from "react"

interface IntervalInputsProps {
  children: ReactNode;
}

export function IntervalInputs({children}: IntervalInputsProps) {
  return (
    <div className="flex items-center gap-2" >
      {children}
    </div>
  )
}