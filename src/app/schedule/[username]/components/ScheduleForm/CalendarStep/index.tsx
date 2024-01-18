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
import { useQuery } from "@tanstack/react-query";


interface Availability {
  availableTimes: number[];
  possibleTimes: number[]
}

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  
  const isDateSelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate ? dayjs(selectedDate).format('DD[ de ]MMMM') : null

  const params: {username: string} = useParams()
  const username = params.username;

  const selectedDateWithoutTime = selectedDate ? dayjs(selectedDate).format('YYYY-MM-DD') : null

  const {data: availability} = useQuery<Availability>({
    queryKey: ['availability', selectedDateWithoutTime], 
    queryFn: async () => {
      const response = await api.get(`users/${username}/availability`, {
        params: {
          date: dayjs(selectedDate).format('YYYY-MM-DD')
        },
      })

      return response.data
    },
    enabled: !!selectedDate
  })


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
            {
              availability?.possibleTimes.map((hour) => (
                <TimePickerItem key={hour} disabled={!availability.availableTimes.includes(hour)}>
                  {String(hour).padStart(2,'0') }:00h
                </TimePickerItem>
              ))
            }

          </TimePickerList>
        </TimePicker>
      )}
    </Box>
  )
}