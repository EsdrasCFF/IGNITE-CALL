import { ReactNode } from "react"

interface ConnectItemProps {
  children: ReactNode;
}

export function ConnectItem({children}: ConnectItemProps) {
  return (
    <div className="flex items-center justify-between border border-solid border-gray600 py-4 px-6 rounded-md mb-2" >
      {children}
    </div>
  )
}