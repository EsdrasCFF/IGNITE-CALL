"use client"

import { Button, Checkbox, MultiStep, TextInput } from "@ignite-ui/react";
import { Header } from "../components/Header";
import { IntervalBox } from "./components/IntervalBox";
import { IntervalItem } from "./components/IntervalItem";
import { IntervalDay } from "./components/IntervalDay";
import { IntervalInputs } from "./components/IntervalInputs";
import { ArrowRight } from "phosphor-react";
import { z } from "zod";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { getWeekDays } from "@/utils/get-week-days";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "../components/FormError";

const tiemIntervalsFormSchema = z.object({
  intervals: z.array(
    z.object({
      weekDay: z.number().min(0).max(6),
      enabled: z.boolean(),
      startTime: z.string(),
      endTime: z.string(),
    }),
  )
  .length(7)
  .transform( intervals => intervals.filter(interval => interval.enabled))
  .refine(intervals => intervals.length > 0, {message: 'Você precisa selecionar pelo menos 1 dia da semana!'})
  ,
})

type TimeIntervalsFormData = z.infer<typeof tiemIntervalsFormSchema>

export default function TimeIntervalsPage() {
 
  const { register, handleSubmit, control, watch, formState: {isSubmitting, errors} } = useForm({
    resolver: zodResolver(tiemIntervalsFormSchema),
    defaultValues: {
      intervals: [
        {weekDay: 0, enabled: false, startTime: '08:00', endTime: '18:00'},
        {weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00'},
        {weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00'},
        {weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00'},
        {weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00'},
        {weekDay: 5, enabled: true, startTime: '08:00', endTime: '18:00'},
        {weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00'},
      ]
    }
  })

  const { fields } = useFieldArray({
    control,
    name: 'intervals'
  })

  const weekDays = getWeekDays()

  const intervals = watch('intervals')

  function handleSetTimeIntervals(data: TimeIntervalsFormData) {
    console.log(data)
  }

  const error = errors
  console.log(error)

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
        <div className="border border-solid border-gray600 rounded-md" >
          {fields.map((field, index) => {
            return (
              <IntervalItem key={field.id} >
                <IntervalDay>
                  <Controller
                    name={`intervals.${index}.enabled`}
                    control={control}
                    render={({ field }) => {
                      return (
                        <Checkbox
                          onCheckedChange={(checked: boolean) => {
                            field.onChange(checked === true)
                          }}
                          checked={field.value}
                        />
                      )
                    }}
                  />

                  <p>{ weekDays[field.weekDay]}</p>
                </IntervalDay>

                <IntervalInputs>
                  <TextInput 
                    size="sm"
                    type="time"
                    step={60}
                    disabled={intervals[index].enabled === false}
                    {...register(`intervals.${index}.startTime`)}
                  />
                  
                  <TextInput 
                    size="sm"
                    type="time"
                    step={60}
                    disabled={intervals[index].enabled === false}
                    {...register(`intervals.${index}.endTime`)}
                  />
                </IntervalInputs>
              </IntervalItem>
            )
          })}
        </div>
        
        {errors.intervals?.root && (
          <FormError>{errors.intervals.root.message}</FormError>
        )}

        <Button type="submit" disabled={isSubmitting} >
          Próximo Passo
          <ArrowRight/>
        </Button>
    
      </IntervalBox>

    </main>
  );
}
