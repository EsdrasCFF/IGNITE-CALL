import { CalendarBlank, Clock } from "phosphor-react";
import { ConfirmForm } from "./ConfirmForm";
import { FormHeader } from "./FormHeader";
import { Button, TextArea, TextInput } from "@ignite-ui/react";
import { FormActions } from "./FormActions";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "./FormError";

const ConfirmFormSchema = z.object({
  name: z.string().min(3,{message: 'O nome precisa de pelo menos 3 caracteres!'}),
  email: z.string().email({message: 'Digite um e-mail válido!'}),
  observations: z.string().nullable(),
})

type ConfirmFormData = z.infer<typeof ConfirmFormSchema>

export function ConfirmStep() {
  const { register, handleSubmit, formState: {isSubmitting, errors} } = useForm<ConfirmFormData>({
    resolver: zodResolver(ConfirmFormSchema)
  })

  function handleConfirmScheduling(data: ConfirmFormData) {

  }

  return (
    <ConfirmForm onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <p className="flex items-center gap-2" >
          <CalendarBlank color="#A9A9B2" width={18} height={18} />
          07 de Janeiro de 2024
        </p>

        <p className="flex items-center gap-2" >
          <Clock color="#A9A9B2" width={18} height={18} />
          18:00h
        </p>
      </FormHeader>

      <label className="flex flex-col gap-2" >
        <p>Nome Completo</p>
        <TextInput {...register('name')} placeholder="Seu nome"/>
        {errors.name && (<FormError> {errors.name.message} </FormError>)}
      </label>
      
      <label className="flex flex-col gap-2" >
        <p>Endereço de e-mail</p>
        <TextInput {...register('email')} type="email" placeholder="jhondoe@example.com"/>
        {errors.email && (<FormError> {errors.email.message} </FormError>)}
      </label>
      
      <label className="flex flex-col gap-2" >
        <p>Observações</p>
        <TextArea {...register('observations')} />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">Cancelar</Button>
        <Button type="submit" disabled={isSubmitting} >Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  )
}