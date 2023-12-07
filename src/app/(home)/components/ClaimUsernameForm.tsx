"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextInput} from "@ignite-ui/react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const claimUsernameFormSchema = z.object({
  username: z.string()
    .min(3, {message: "O usuário precisa ter pelo menos 3 letras."})
    .regex(/^([a-z\\-]+)$/i, {message: "O usuário pode ter apenas letras e hífens"})
    .transform(username => username.toLowerCase())
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm () {
  const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema)
  })

  const router = useRouter();

  async function handlePreRegister(data: ClaimUsernameFormData) {
    const {username} = data;
  
    await router.push(`register?username=${username}`)
  }

  return (
    <>
      <form className="grid grid-cols-[1fr,auto] gap-2" onSubmit={handleSubmit(handlePreRegister)} >
        <TextInput  
          size="sm" 
          prefix="ignite.com/" 
          placeholder="seu-usuario"
          {...register('username')}
        />

        <Button size='sm' type='submit' disabled={isSubmitting} >
          Reservar 
          <ArrowRight/>
        </Button>
        
      </form>
      
      <div className="mt-2">
        <p className="text-xs" >
          {errors.username ? errors.username.message : 'Digite o nome de usuário desejado'}
        </p>
      </div>
    </>
  );
}
