'use client'

import { ReactNode, useCallback } from 'react'
import { useRouter } from 'next/navigation'

type Prop = Readonly<{
  children: ReactNode
  mode?: 'modal' | 'redirect'
  asChild?: boolean
}>

export const LoginButton = (props: Prop) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, mode = 'redirect', asChild } = props

  const router = useRouter()

  const onClick = useCallback(() => {
    router.push('/auth/login')
  }, [router])

  if (mode === 'modal') {
    return <span>TODO: Implement modal</span>
  }

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  )
}
