"use client"

import { Button, MultiStep, Text } from "@ignite-ui/react";
import { Header } from "../components/Header";
import { ArrowRight } from "phosphor-react";
import { ConnectBox } from "./components/ConnectBox";
import { ConnectItem } from "./components/ConnectItem";



export default function RegisterPage() {
  // async function handleRegister(data: RegisterFormData) {
  
  // }


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

          <Button variant="secondary" size="sm">
            Conectar 
            <ArrowRight/>  
          </Button>
        </ConnectItem>

        <Button type="submit" disableb={false} >
            Próximo Passo
            <ArrowRight/>
        </Button>
      </ConnectBox>

    </main>
  );
}
