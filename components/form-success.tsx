import { CheckCircledIcon } from '@radix-ui/react-icons'

type Prop = Readonly<{
  message?: string
}>

export const FormSuccess = (props: Prop) => {
  const { message } = props

  if (!message) return null

  return (
    <div className="flex items-center gap-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-700">
      <CheckCircledIcon className="h-4 w-4" />
      <p role="alert">{message}</p>
    </div>
  )
}
