import { CalendarBlank, Clock } from "phosphor-react";
import { ConfirmForm } from "./ConfirmForm";
import { FormHeader } from "./FormHeader";
import { Button, TextArea, TextInput } from "@ignite-ui/react";
import { FormActions } from "./FormActions";

export function ConfirmStep() {
  function handleConfirmScheduling() {

  }

  return (
    <ConfirmForm onSubmit={handleConfirmScheduling}>
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
        <TextInput  placeholder="Seu nome"/>
      </label>
      
      <label className="flex flex-col gap-2" >
        <p>Endereço de e-mail</p>
        <TextInput type="email" placeholder="jhondoe@example.com"/>
      </label>
      
      <label className="flex flex-col gap-2" >
        <p>Observações</p>
        <TextArea/>
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">Cancelar</Button>
        <Button type="submit">Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  )
}