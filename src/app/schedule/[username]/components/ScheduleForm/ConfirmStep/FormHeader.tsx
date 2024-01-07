import { ReactNode } from "react";

interface FormHeadePops {
  children: ReactNode;
}

export function FormHeader ({children}: FormHeadePops) {
  return (
    <div className="flex items-center gap-4 pb-6 mb-2 border-b border-solid border-gray600" >
      {children}
    </div>
  )
}