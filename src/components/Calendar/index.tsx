import { CaretLeft, CaretRight } from "phosphor-react";
import { CalendarAction } from "./CalendarActions";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarTitle } from "./CalendarTitle";
import { CalendarBody } from "./CalendarBody";
import { getWeekDays } from "@/utils/get-week-days";
import { CalendarDay } from "./CalendarDay";

export function Calendar() {

  const shortWeekDays = getWeekDays({short: true})

  return (
    <div>
      <CalendarHeader>
        <CalendarTitle> Janeiro <span>2024</span> </CalendarTitle>

        <CalendarAction>
          <button>
            <CaretLeft/>
          </button>
          
          <button>
            <CaretRight/>
          </button>
        </CalendarAction>

        <CalendarBody>
          <thead>
            <tr>
              {shortWeekDays.map((weekDay) => (
                <th key={weekDay} >{weekDay}.</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><CalendarDay>1</CalendarDay></td>
              <td><CalendarDay>2</CalendarDay></td>
              <td><CalendarDay>3</CalendarDay></td>
            </tr>
          </tbody>
        </CalendarBody>
      </CalendarHeader>
    </div>
  )
}