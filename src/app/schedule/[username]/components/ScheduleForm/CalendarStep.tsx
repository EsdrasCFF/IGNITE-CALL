import { Calendar } from "@/components/Calendar";
import { Box } from "@ignite-ui/react";
import { ReactNode } from "react";

interface CalendarStepProps {
  children: ReactNode;
}

export function CalendarStep() {
  return(
    <Box className="grid my-auto mt-6 p-0 relative max-w-full" >
      <Calendar/>
    </Box>
  )
}