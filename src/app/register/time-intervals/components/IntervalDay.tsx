import { ReactNode } from "react"

interface IntervalDayProps {
  children: ReactNode;
}

export function IntervalDay({children}: IntervalDayProps) {
  return (
    <div className="flex items-center gap-3" >
      {children}
    </div>
  )
}