"use client"

import { Button, MultiStep, TextInput } from "@ignite-ui/react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormError } from "./components/FormError";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams} from "next/navigation";
import { useEffect } from "react";


const registerFormSchema = z.object({
  username: z.string()
      .min(3, {message: "O usuário precisa ter pelo menos 3 letras."})
      .regex(/^([a-z\\-]+)$/i, {message: "O usuário pode ter apenas letras e hífens"})
      .transform(username => username.toLowerCase()),
  
  name: z.string()
     .min(3, {message: "O usuário precisa ter pelo menos 3 letras."})
})


type RegisterFormData = z.infer<typeof registerFormSchema>

export default function RegisterPage() {

  const {register, handleSubmit, setValue, formState: {errors, isSubmitting}} = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema)
  })

  const query = useSearchParams();

  async function handleRegister(data: RegisterFormData) {
    console.log(data)
  }

  useEffect(() => {
    const username = query.get('username')
    
    if(username) {
      setValue('username', username)
    }
    
  }, [query, setValue])

  return (
    <main className="max-w-[572px] mt-20 mb-4 mx-auto py-0 px-4" >
      <Header>
        <h1 className="text-2xl font-bold mb-1" >Bem-vindo ao Ignite Call!</h1>

        <p className="text-gray200 mb-6" >
          Precisamos de algumas informações para criar seu perfil! 
          Ah, você pode editar essas informações depois.
        </p>

        <MultiStep size={4} currentStep={1}/>

      </Header>

      <Form onSubmit={handleSubmit(handleRegister)} >
        <label className="flex flex-col gap-2" >
          <p className="text-sm"> Nome de Usuário </p>

          <TextInput prefix="ignite.com/" placeholder="seu-usuario" {...register('username')} />

          {errors.username?.message && (
            <FormError> {errors.username.message} </FormError>
          )}

        </label>
        
        <label className="flex flex-col gap-2" >
          <p className="text-sm"> Nome Completo </p>

          <TextInput prefix="" placeholder="Seu nome" {...register('name')}/>

          {errors.name?.message && (
            <FormError> {errors.name.message} </FormError>
          )}
        </label>

        <Button type="submit" disableb={isSubmitting} >
          Próximo Passo
          <ArrowRight/>
        </Button>
      </Form>
    </main>
  );
}
