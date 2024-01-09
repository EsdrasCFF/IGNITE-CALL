import { CaretLeft, CaretRight } from "phosphor-react";
import { CalendarAction } from "./CalendarActions";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarTitle } from "./CalendarTitle";
import { CalendarBody } from "./CalendarBody";
import { getWeekDays } from "@/utils/get-week-days";
import { CalendarDay } from "./CalendarDay";
import { useMemo, useState } from "react";
import dayjs from "dayjs";

export function Calendar() {

  const [currentDate, setCurrentDate] = useState(() => {return dayjs().set('date', 1)})

  const shortWeekDays = getWeekDays({short: true})

  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')

  const calendarWeeks = useMemo(() => {
    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return currentDate.set('date', i + 1)
    })

    const firstWeekDay = currentDate.get('day')
    
    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    }).map((_, i)=> {
      return currentDate.subtract(1 + i, 'day')
    }).reverse()

    return [...previousMonthFillArray, ...daysInMonthArray, ]
  }, [currentDate])

  console.log(calendarWeeks)


  function handlePreviousMonth() {
    const previousMonthDate = currentDate.subtract(1, 'month')

    setCurrentDate(previousMonthDate)
  }

  function handleNextMonth() {
    const previousMonthDate = currentDate.add(1, 'month')

    setCurrentDate(previousMonthDate)
  }

  return (
    <div className="flex flex-col gap-6 p-6" >
      <CalendarHeader>
        <CalendarTitle> {currentMonth} <span className="text-gray200" >{currentYear}</span> </CalendarTitle>

        <CalendarAction>
          <button className=" hover:text-gray100 focus:outline focus:text-gray100 rounded" onClick={handlePreviousMonth} title="previous month">
            <CaretLeft width={18} height={18}/>
          </button>
          
          <button className=" hover:text-gray100 focus:outline focus:text-gray100 rounded" onClick={handleNextMonth} title="next month">
            <CaretRight width={18} height={18} />
          </button>
        </CalendarAction>
      </CalendarHeader>

      <CalendarBody>
        <thead className="text-gray200 font-medium text-sm" >
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th className="text-gray200 font-medium text-sm" key={weekDay} >{weekDay}.</th>
            ))}
          </tr>
        </thead>
        <tbody className="box-border" >
          <tr>
            <td className="box-border"></td>
            <td></td>
            <td></td>
            <td></td>
            <td><CalendarDay disabled >1</CalendarDay></td>
            <td><CalendarDay>2</CalendarDay></td>
            <td><CalendarDay>3</CalendarDay></td>
          </tr>
        </tbody>
      </CalendarBody>
      
    </div>
  )
}