import { Calendar } from "@/components/Calendar";
import { Box } from "@ignite-ui/react";
import { useEffect, useState } from "react";
import { TimePicker } from "@/components/TimePicker";
import { TimePickerHeader } from "@/components/TimePicker/TimePickerHeader";
import { TimePickerList } from "@/components/TimePicker/TimePickerList";
import { TimePickerItem } from "@/components/TimePicker/TimePickerItem";
import dayjs from "dayjs";
import '@/lib/dayjs'
import { useParams} from "next/navigation";
import { api } from "@/lib/axios";

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const isDateSelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate ? dayjs(selectedDate).format('DD[ de ]MMMM') : null

  const params: {username: string} = useParams()
  const username = params.username;

  useEffect(() => {
    if(!selectedDate) {
      return;
    }

    api.get(`users/${username}/availability`, {
      params: {
        date: dayjs(selectedDate).format('YYYY-MM-DD')
      }
    }).then((response) => {
      console.log(response.data)
    })


  }, [selectedDate, username])

  return(
    <Box className={`
      grid grid-cols-[1fr] mx-0 mt-6 mb-0 p-0 relative max-w-full 
      ${isDateSelected ? 'time-picker-open' : 'w-[540px]'}
      `}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay}, <span className="text-gray200">{ describedDate }</span>
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