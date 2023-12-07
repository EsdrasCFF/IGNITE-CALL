import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}


export function Header({children}: HeaderProps) {
  return (
    <div className="py-0 px-6" >
      {children}
    </div>
  );
}
