import { ReactNode } from "react"

interface IntervalItemProps {
  children: ReactNode;
}

export function IntervalItem({children}: IntervalItemProps) {
  return (
    <div className="flex items-center justify-between py-3 px-4 border border-solid border-gray600" >
      {children}
    </div>
  )
}