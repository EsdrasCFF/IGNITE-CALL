"use client"

import { Box } from "@ignite-ui/react";
import { FormEvent, ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function Form({children, onSubmit}: FormProps ) {
  return (
    <Box as="form" className="mt-6 flex flex-col gap-4" onSubmit={onSubmit} >
      {children}
    </Box>      
  );
}
