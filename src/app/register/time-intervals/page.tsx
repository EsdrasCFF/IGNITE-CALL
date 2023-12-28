"use client"

import { Button, Checkbox, MultiStep, TextInput } from "@ignite-ui/react";
import { Header } from "../components/Header";
import { IntervalBox } from "./components/IntervalBox";
import { IntervalItem } from "./components/IntervalItem";
import { IntervalDay } from "./components/IntervalDay";
import { IntervalInputs } from "./components/IntervalInputs";
import { ArrowRight } from "phosphor-react";
import { z } from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { getWeekDays } from "@/utils/get-week-days";

const tiemIntervalsFormSchema = z.object({

})

export default function TimeIntervalsPage() {
 
  const { register, handleSubmit, control, formState: {isSubmitting, errors} } = useForm({
    defaultValues: {
      intervals: [
        {weekday: 0, enabled: false, startTime: '08:00', endTime: '18:00'},
        {weekday: 1, enabled: true, startTime: '08:00', endTime: '18:00'},
        {weekday: 2, enabled: true, startTime: '08:00', endTime: '18:00'},
        {weekday: 3, enabled: true, startTime: '08:00', endTime: '18:00'},
        {weekday: 4, enabled: true, startTime: '08:00', endTime: '18:00'},
        {weekday: 5, enabled: true, startTime: '08:00', endTime: '18:00'},
        {weekday: 6, enabled: false, startTime: '08:00', endTime: '18:00'},
      ]
    }
  })

  const { fields } = useFieldArray({
    control,
    name: 'intervals'
  })

  const weekDays = getWeekDays()

  function handleSetTimeIntervals() {}

  return (
    <main className="max-w-[572px] mt-20 mb-4 mx-auto py-0 px-4" >
      <Header>
        <h1 className="text-2xl font-bold mb-1" >Quase lá!</h1>

        <p className="text-gray200 mb-6" >
          Defina o intervalo de horários que você está disponível em cada dia da semana.
        </p>

        <MultiStep size={4} currentStep={3}/>
      </Header>

      <IntervalBox onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <div className="border border-solid border-gray600 rounded-md mb-4" >
          {fields.map((field, index) => {
            return (
              <IntervalItem key={field.id} >
                <IntervalDay>
                  <Checkbox/>
                  <p>{ weekDays[field.weekday]}</p>
                </IntervalDay>

                <IntervalInputs>
                  <TextInput 
                    size="sm"
                    type="time"
                    step={60}
                    {...register(`intervals.${index}.startTime`)}
                  />
                  
                  <TextInput 
                    size="sm"
                    type="time"
                    step={60}
                    {...register(`intervals.${index}.endTime`)}
                  />
                </IntervalInputs>
              </IntervalItem>
            )
          })}
        </div>

        <Button type="submit">
          Próximo Passo
          <ArrowRight/>
        </Button>
    
      </IntervalBox>

    </main>
  );
}
