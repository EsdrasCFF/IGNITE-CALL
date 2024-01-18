import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/providers/auth'
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import { ReactQueryProvider } from '@/providers/react-query';
dayjs.locale('pt-br');


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata: Metadata = {
  title: 'Ignite Call',
  description: 'Ignite Call - Planejamento e agenda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <ReactQueryProvider>
        <body className={roboto.className}>
          <AuthProvider>
            {children}
          </AuthProvider>
        </body>
      </ReactQueryProvider>
    </html>
  )
}