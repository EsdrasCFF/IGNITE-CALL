import { CaretLeft, CaretRight } from "phosphor-react";
import { CalendarAction } from "./CalendarActions";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarTitle } from "./CalendarTitle";
import { CalendarBody } from "./CalendarBody";
import { getWeekDays } from "@/utils/get-week-days";
import { CalendarDay } from "./CalendarDay";
import { useMemo, useState } from "react";
import dayjs from "dayjs";
import '@/lib/dayjs'

interface CalendarWeek {
  week: number;
  days: Array<{
    date: dayjs.Dayjs,
    disabled: boolean
  }>
}

type CalendarWeeks = CalendarWeek[]

interface CalendarProps {
  selectedDate?: Date | null;
  onDateSelected: (date: Date) => void;
}

export function Calendar({selectedDate, onDateSelected}: CalendarProps) {

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

    const lastDayInCurrentMonth = currentDate.set('date', currentDate.daysInMonth())
    const lastWeekDay = lastDayInCurrentMonth.get('day')

    const nextMonthFillArray = Array.from({
      length: 7 - (lastWeekDay + 1),
    }).map((_, i) => {
      return lastDayInCurrentMonth.add((i + 1), 'day')
    })

    const calendarDays = [
      ...previousMonthFillArray.map((date) => {
        return {date, disabled: true}
      }),
      ...daysInMonthArray.map((date) => {
        return {date, disabled: date.endOf('day').isBefore(new Date())}
      }),
      ...nextMonthFillArray.map((date) => {
        return {date, disabled: true}
      })
    ]

    const calendarWeek = calendarDays.reduce<CalendarWeeks>((weeks, _, i, original) => {
      const isNewWeek = i % 7 == 0

      if(isNewWeek) {
        weeks.push({
          week: i / 7+ 1,
          days: original.slice(i, i + 7) 
        })
      }

      return weeks
    }, [])

    return calendarWeek
  }, [currentDate])


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
          {calendarWeeks.map(({week, days}, index) => {
            return (
              <tr key={index}>
                {days.map(({date, disabled}) => {
                  return (
                    <td key={date.toString()}>
                      <CalendarDay onClick={() => onDateSelected(date.toDate())} disabled={disabled} >{date.get('date')}</CalendarDay>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </CalendarBody>
      
    </div>
  )
}