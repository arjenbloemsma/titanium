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

export default function LoginPage() {
  return (
    <>
      <div>Login Page</div>
      <Button onClick={loginWithGithub}>Sign In</Button>
    </>
  );
}

