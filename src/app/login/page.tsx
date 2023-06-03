'use client'

import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'

const loginWithGithub = async () => {
  try {
    await signIn('github')
  } catch (error) {
    console.error(error)
  }
}

const loginWithAuth0 = async () => {
  try {
    await signIn('auth0')
  } catch (error) {
    console.error(error)
  }
}

export default function LoginPage() {
  return (
    <>
      <div>Login Page</div>
      <Button onClick={loginWithGithub}>Sign in using Github</Button>
      <Button onClick={loginWithAuth0}>Sign in using Auth0</Button>
    </>
  );
}

