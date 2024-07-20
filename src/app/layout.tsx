import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Loading } from '@/components/ui/loading'
import './globals.css'

import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/context/them-provider'
import { Suspense } from 'react';

export default function RootLayout({
  children,
}:Readonly<{children:React.ReactNode}>)  {
  return (
   
      <html lang="en" >
        <ClerkProvider >
        <body className={roboto.className} suppressHydrationWarning>
        <Suspense fallback={<div className='mr-[50%]'>loading...</div>}>
        <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange>
             
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
          {children}
          
            <Toaster/>
          </ThemeProvider>
          </Suspense>
          </body>
          </ClerkProvider>
      </html>
      
  )
}