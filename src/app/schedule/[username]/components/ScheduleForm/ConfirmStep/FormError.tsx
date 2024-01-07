import { ReactNode } from "react";

interface FormErrorProps {
  children: ReactNode;
}

export function FormError({children}: FormErrorProps) {
  return (
    <p className="text-red text-xs" >
      {children}
    </p>
  )
}