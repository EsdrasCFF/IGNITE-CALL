"use client"

import { Button, MultiStep, Text } from "@ignite-ui/react";
import { Header } from "../components/Header";
import { ArrowRight, Check } from "phosphor-react";
import { ConnectBox } from "./components/ConnectBox";
import { ConnectItem } from "./components/ConnectItem";
import { signIn, useSession } from 'next-auth/react'
import { useRouter, useSearchParams} from "next/navigation"
import { AuthErrorText } from "./components/AuthErrorText";


export default function ConnectCalendarPage() {
  // async function handleRegister(data: RegisterFormData) {
  
  // }

  const session = useSession()
  const router = useRouter();
  const query = useSearchParams();

  const hasAuthError = query.get('error')
  const isSignedIn = session.status == 'authenticated'

  async function handleConnectCalendarClick() {
    await signIn('google')
  }

  function handleNavigateToNextStep() {
    router.push('/register/time-intervals')
  }

  return (
    <main className="max-w-[572px] mt-20 mb-4 mx-auto py-0 px-4" >
      <Header>
        <h1 className="text-2xl font-bold mb-1" >Conecte sua agenda!</h1>

        <p className="text-gray200 mb-6" >
          Conecte o seu calendário para verificar automaticamente as horas ocupadas e os novos eventos à medida em que são agendados.
        </p>

        <MultiStep size={4} currentStep={2}/>
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text> Google Calendar</Text>

          {isSignedIn ? (
            <Button size='sm' disabled >
              Conectado
              <Check/>
            </Button>
          ) : (
            <Button variant="secondary" size="sm" onClick={handleConnectCalendarClick} >
              Conectar 
              <ArrowRight/>  
            </Button>
          )}

        </ConnectItem>

        {hasAuthError && (
          <AuthErrorText>
            Falha ao se conectar ao Google, verifique se você habilitou as permissões de acesso ao Google Calendar!
          </AuthErrorText>
        )}

        <Button type="submit" disabled={!isSignedIn} onClick={handleNavigateToNextStep} >
            Próximo Passo
            <ArrowRight/>
        </Button>
      </ConnectBox>

    </main>
  );
}
