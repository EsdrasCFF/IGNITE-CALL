import { Box } from "@ignite-ui/react";
import { FormEvent, ReactNode } from "react";

interface ProfileBoxProps {
  children: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function ProfileBox({children, onSubmit}: ProfileBoxProps) {
  return (
    <Box className="mt-6" >
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        {children}
      </form>
    </Box>
  )
}