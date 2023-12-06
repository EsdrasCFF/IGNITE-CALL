import { ReactNode } from "react";

interface PreviewProps {
  children: ReactNode
}

export function Preview({children}: PreviewProps) {
  return (
    <div className="max-w-[600px] md:max-w-full md:display-block" >
      {children}
    </div>
  );
}
