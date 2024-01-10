import { Calendar } from "@/components/Calendar";
import { Box } from "@ignite-ui/react";
import { ReactNode, useState } from "react";
import { TimePicker } from "@/components/TimePicker";
import { TimePickerHeader } from "@/components/TimePicker/TimePickerHeader";
import { TimePickerList } from "@/components/TimePicker/TimePickerList";
import { TimePickerItem } from "@/components/TimePicker/TimePickerItem";

interface CalendarStepProps {
  children: ReactNode;
}

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const isDateSelected = !!selectedDate
  console.log(isDateSelected)
  const isTimePickerOpen = isDateSelected

  return(
    <Box className={`
      grid grid-cols-[1fr] mx-0 mt-6 mb-0 p-0 relative max-w-full 
      ${isTimePickerOpen ? 'time-picker-open' : 'w-[540px]'}
      `}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            terça-feira <span className="text-gray200">07 de Janeiro</span>
          </TimePickerHeader>

          <TimePickerList>
            <TimePickerItem>08:00</TimePickerItem>
            <TimePickerItem>09:00</TimePickerItem>
            <TimePickerItem>10:00</TimePickerItem>
            <TimePickerItem>11:00</TimePickerItem>
            <TimePickerItem>12:00</TimePickerItem>
            <TimePickerItem>13:00</TimePickerItem>
            <TimePickerItem>14:00</TimePickerItem>
            <TimePickerItem>15:00</TimePickerItem>
            <TimePickerItem>16:00</TimePickerItem>
            <TimePickerItem>17:00</TimePickerItem>
            <TimePickerItem>18:00</TimePickerItem>
            <TimePickerItem>19:00</TimePickerItem>
            <TimePickerItem>20:00</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Box>
  )
}