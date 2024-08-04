import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

type Prop = Readonly<{
  message?: string
}>

export const FormError = (props: Prop) => {
  const { message } = props

  if (!message) return null

  return (
    <div className="flex items-center gap-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p role="alert">{message}</p>
    </div>
  )
}
