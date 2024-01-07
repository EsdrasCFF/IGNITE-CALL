import { ReactNode } from "react";

interface FormActionsProps {
  children: ReactNode
}

export function FormActions({children}: FormActionsProps) {
  return (
    <div className="flex justify-end gap-2 mt-2" >
      {children}
    </div>
  )
}