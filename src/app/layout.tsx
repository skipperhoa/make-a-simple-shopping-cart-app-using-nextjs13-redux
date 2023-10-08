
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './_redux/provider'
import Header from './_components/Header'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Create a simple example Cart in NextJS 13',
  description: 'Create a simple example Cart in NextJS 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  
        <html lang="en">
          <body className={inter.className}>
               <Providers>
                    <Header />
                    {children}
                </Providers>
          </body>
        </html>
   
  )
}
