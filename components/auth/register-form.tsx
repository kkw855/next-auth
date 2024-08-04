'use client'

import { useState, useTransition } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { RegisterSchema } from '@/schemas'
import { register } from '@/actions/register'
import { CardWrapper } from '@/components/auth/card-wrapper'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'

const RegisterForm = () => {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<string>('')

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })
  const { control, handleSubmit } = form
  const onSubmit: SubmitHandler<RegisterSchema> = (values: RegisterSchema) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      register(values)
        .then((res) => {
          if (res._tag === 'success') setSuccess(res.message)
          else setError(res.message)
        })
        .catch((err: unknown) => {
          console.error(err)
        })
    })
  }

  return (
    <CardWrapper
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account?"
      headerLabel="Create an account"
      showSocial
    >
      <Form {...form}>
        <form
          className="space-y-4"
          onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}
        >
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="John Doe"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="john.doe@example.com"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="off"
                    disabled={isPending}
                    placeholder="******"
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button className="w-full" disabled={isPending} type="submit">
            Create an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default RegisterForm
