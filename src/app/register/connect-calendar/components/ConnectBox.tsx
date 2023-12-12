import { Box } from "@ignite-ui/react";
import { ReactNode } from "react";

interface ConnectBoxProps {
  children: ReactNode;
}

export function ConnectBox({children}: ConnectBoxProps) {
  return (
    <Box className="mt-6 flex flex-col" >
      {children}
    </Box>
  )
}