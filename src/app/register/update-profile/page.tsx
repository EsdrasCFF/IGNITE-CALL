"use client"

import { Avatar, Button, MultiStep, TextArea, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "../components/Header";
import { ProfileBox } from "./components/ProfileBox";
import { Label } from "./components/Label";
import { useSession } from "next-auth/react";


const updateProfileSchema = z.object({
  bio: z.string()
})


type UpdateProfileData = z.infer<typeof updateProfileSchema>

export default function RegisterPage() {

  const {register, handleSubmit, setValue, formState: { isSubmitting}} = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileSchema)
  })

  const session = useSession()
  console.log(session)

  async function handleUpdateProfile(data: UpdateProfileData) {
  
  }


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

      <ProfileBox onSubmit={handleSubmit(handleUpdateProfile)} >
        <Label>
          <p className="text-sm" >Foto de perfil</p>
          {/* @ts-ignore */}
          <Avatar src={session.data?.user?.avatar_url} alt={session.data?.user?.name} />
        </Label>
        
        <Label>
          <p className="text-sm"> Sobre Você </p>

          <TextArea {...register('bio')}/>

          <p className="text-gray400 text-sm">Fale um pouco sobre você. Isto será exibido em sua página pessoal.</p>
        </Label>

        <Button type="submit" >
          Finalizar
          <ArrowRight/>
        </Button>
      </ProfileBox>
    </main>
  );
}
