import { ReactNode } from "react";

interface FormErrorProps {
  children: ReactNode;
}

export function FormError({children}: FormErrorProps) {
  return (
    <p className='text-[#f75a68] text-sm' >
      {children}
    </p>
  )
}