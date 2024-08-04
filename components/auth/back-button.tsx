import Link from 'next/link'
import { Button } from '@/components/ui/button'

type Prop = Readonly<{
  label: string
  href: string
}>

export const BackButton = (props: Prop) => {
  const { href, label } = props

  return (
    <Button asChild className="font-normal" size="sm" variant="link">
      <Link href={href}>{label}</Link>
    </Button>
  )
}
