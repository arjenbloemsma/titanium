'use client'

import { SessionProvider } from 'next-auth/react'
import { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

interface ProviderProps {
   children: ReactNode
   session: unknown
}

const Providers: FC<ProviderProps> = ({ children, session }) => (
   <>
      <SessionProvider session={session}>
         <Toaster position="top-center" reverseOrder={false} />
         {children}
      </SessionProvider>
   </>
)

export default Providers
