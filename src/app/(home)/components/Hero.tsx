import { ReactNode } from "react";

interface HeroProps {
  children: ReactNode
}

export function Hero ({children}: HeroProps) {
  return (
    <div className='max-w-md px-10' >
      {children}
    </div>
  );
}
