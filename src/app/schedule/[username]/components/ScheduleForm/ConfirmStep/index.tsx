import { CalendarBlank, Clock } from "phosphor-react";
import { ConfirmForm } from "./ConfirmForm";
import { FormHeader } from "./FormHeader";
import { Button, TextArea } from "@ignite-ui/react";
import { FormActions } from "./FormActions";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "./FormError";
import dayjs from "dayjs";
import { useParams} from "next/navigation";
import { api } from "@/lib/axios";
import '@/lib/dayjs';
import { TextInput } from "@/components/TextInput";

const ConfirmFormSchema = z.object({
  name: z.string().min(3,{message: 'O nome precisa de pelo menos 3 caracteres!'}),
  email: z.string().email({message: 'Digite um e-mail válido!'}),
  observations: z.string().nullable(),
})

type ConfirmFormData = z.infer<typeof ConfirmFormSchema>

interface CalendarStepProps {
  schedulingDate: Date;
  onCancelConfirmation: () => void; 
}

export function ConfirmStep({schedulingDate, onCancelConfirmation}: CalendarStepProps) {
  const { register, handleSubmit, formState: {isSubmitting, errors} } = useForm<ConfirmFormData>({
    resolver: zodResolver(ConfirmFormSchema)
  })
  
  const describedDate = dayjs(schedulingDate).format('DD[ de ]MMMM[ de ]YYYY')
  const describedHour = dayjs(schedulingDate).format('HH:mm[h]')
  
  const params: {username: string} = useParams()
  const username = params.username;

  async function handleConfirmScheduling(data: ConfirmFormData) {
    const {name, email, observations } = data;
  
    await api.post(`users/${username}/schedule`, {
      name,
      email,
      observations,
      date: schedulingDate,
    })
    
    onCancelConfirmation()

  }

  return (
    <ConfirmForm onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <p className="flex items-center gap-2" >
          <CalendarBlank color="#A9A9B2" width={18} height={18} />
          {describedDate}
        </p>

        <p className="flex items-center gap-2" >
          <Clock color="#A9A9B2" width={18} height={18} />
          {describedHour}
        </p>
      </FormHeader>

      <label className="flex flex-col gap-2" >
        <p>Nome Completo</p>
        <TextInput placeholder="Seu nome" name="name" register={register}/>
        {errors.name && (<FormError> {errors.name.message} </FormError>)}
      </label>
      
      <label className="flex flex-col gap-2" >
        <p>Endereço de e-mail</p>
        <TextInput  type="email" placeholder="jhondoe@example.com" name="email" register={register} />
        {errors.email && (<FormError> {errors.email.message} </FormError>)}
      </label>
      
      <label className="flex flex-col gap-2" >
        <p>Observações</p>
        <TextArea {...register('observations')} />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary" onClick={onCancelConfirmation} >Cancelar</Button>
        <Button type="submit" disabled={isSubmitting} >Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  )
}