import * as React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

import Header from '@/components/auth/header'
import { Social } from '@/components/auth/social'
import { BackButton } from '@/components/auth/back-button'

type Prop = Readonly<{
  children: React.ReactNode
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocial?: boolean
}>

export const CardWrapper = (props: Prop) => {
  const { children, headerLabel, backButtonLabel, backButtonHref, showSocial } =
    props

  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial ? (
        <CardFooter>
          <Social />
        </CardFooter>
      ) : null}
      <CardFooter className="justify-center">
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  )
}
