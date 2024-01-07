import { Calendar } from "@/components/Calendar";
import { Box } from "@ignite-ui/react";
import { ReactNode } from "react";

interface CalendarStepProps {
  children: ReactNode;
}

export function CalendarStep() {
  return(
    <Box className="grid grid-cols-[1fr] mx-0 mt-6 mb-0 p-0 relative max-w-full w-[540px]" >
      <Calendar/>
    </Box>
  )
}