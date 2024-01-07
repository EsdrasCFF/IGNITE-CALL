import { Box } from "@ignite-ui/react";
import { FormEvent, ReactNode } from "react";

interface ConfirmFormProps {
  children: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmForm({children, onSubmit}: ConfirmFormProps) {
  return (
    <Box as="form" onSubmit={onSubmit} className="w-[540px] mx-auto mt-6 mb-0 flex flex-col gap-4" >
      {children}
    </Box>
  )
} 