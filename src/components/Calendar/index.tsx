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
    <div className="flex flex-col gap-6 p-6" >
      <CalendarHeader>
        <CalendarTitle> Janeiro <span className="text-gray200" >2024</span> </CalendarTitle>

        <CalendarAction>
          <button className=" hover:text-gray100 focus:outline focus:text-gray100 rounded" >
            <CaretLeft width={18} height={18}/>
          </button>
          
          <button className=" hover:text-gray100 focus:outline focus:text-gray100 rounded">
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