'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast'
import { useState } from 'react'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { data: session } = useSession()

  const loginWith = async (providerName: string, errorMessage: string) => {
    setIsLoading(true)
    try {
      await signIn(providerName)
    } catch (error) {
      setIsLoading(false)
      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const loginWithGithub = () =>
    loginWith('github', 'Error signing in with Github')

  const loginWithAuth0 = () => loginWith('auth0', 'Error signing in with Auth0')

  if (session) {
    return (
      <>
        <div>Logged in as {session.user?.email}</div>
        <Button onClick={() => signOut()} disabled={isLoading}>
          Sign out
        </Button>
      </>
    )
  }
  return (
    <>
      <div>Login Page</div>
      <Button onClick={loginWithGithub} disabled={isLoading}>
        Sign in using Github
      </Button>
      <Button onClick={loginWithAuth0} disabled={isLoading}>
        Sign in using Auth0
      </Button>
    </>
  )
}
