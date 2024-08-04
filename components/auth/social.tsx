'use client'

// import { signIn } from 'next-auth/react'
// import { type OAuthProviderType } from '@auth/core/providers'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

// import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export const Social = () => {
  // const onClick = async (
  //   provider: Extract<OAuthProviderType, 'google' | 'github'>,
  // ) => {
  //   await signIn(provider, {
  //     callbackUrl: DEFAULT_LOGIN_REDIRECT,
  //   })
  // }

  return (
    <div className="flex w-full gap-x-2">
      <Button
        className="w-full"
        size="lg"
        variant="outline"
        // onClick={() => onClick('google')}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        className="w-full"
        size="lg"
        variant="outline"
        // onClick={() => onClick('github')}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  )
}
