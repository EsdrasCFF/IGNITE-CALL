import { ReactNode } from "react";

interface FormHeadePops {
  children: ReactNode;
}

export function FormHeader ({children}: FormHeadePops) {
  return (
    <div>
      {children}
    </div>
  )
}