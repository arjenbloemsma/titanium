'use client'

import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast'
import { useState } from 'react'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

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

  const loginWithAuth0 = () =>
    loginWith('auth0', 'Error signing in with Auth0')

  return (
    <>
      <div>Login Page</div>
      <Button onClick={loginWithGithub}>Sign in using Github</Button>
      <Button onClick={loginWithAuth0}>Sign in using Auth0</Button>
    </>
  );
}

