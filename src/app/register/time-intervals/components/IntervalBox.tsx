import { Box } from "@ignite-ui/react";
import { FormEvent, ReactNode } from "react";

interface IntervalBoxProps {
  children: ReactNode;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export function IntervalBox({children, onSubmit}: IntervalBoxProps) {
  return (
    <form className="mt-6" onSubmit={onSubmit}>
      <Box className="flex flex-col" >
        {children}
      </Box>
    </form>
  )
}