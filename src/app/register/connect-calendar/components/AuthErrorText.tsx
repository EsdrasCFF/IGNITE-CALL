import { ReactNode } from "react";

interface AuthErrorTextProps {
  children: ReactNode;
}

export function AuthErrorText({children}: AuthErrorTextProps) {
  return (
    <p className='text-[#f75a68] mb-2 text-sm' >
      {children}
    </p>
  )
}