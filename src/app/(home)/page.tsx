"use client"

import { Hero } from './components/Hero'
import { Preview } from './components/Preview'
import previewImage from '../../../public/app-preview.png'
import Image from 'next/image'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import { Box } from '@ignite-ui/react'

export default function Home() {
  return (
    <div className='flex items-center gap-20 max-width-custom ml-auto h-screen' >
      <Hero>
        <h1 className='mt-2 text-gray100 text-6xl font-bold '>
          Agendamento descomplicado
        </h1>
        
        <p className='mt-3 text-gray200 text-xl'>
          Conecte seu calendário e permita que as pessoas marquem 
          agendamentos no seu tempo livre.
        </p>
        
        <div className='mt-4'>
          <Box>
            <ClaimUsernameForm/>
          </Box>  
        </div>

      </Hero>

      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt='Caledaria simbolizando aplicação em funcionamento'
        />
      </Preview>
    </div>
  )
}
