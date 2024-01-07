import { Box } from "@ignite-ui/react";
import { FormEvent, ReactNode } from "react";

interface ConfirmFormProps {
  children: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmForm({children, onSubmit}: ConfirmFormProps) {
  return (
    <Box as="form" onSubmit={onSubmit}>
      {children}
    </Box>
  )
} 