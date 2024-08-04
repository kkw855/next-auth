'use client'

import { useState, useTransition } from 'react'
// import Link from 'next/link'
// import { useRouter, useSearchParams } from 'next/navigation'
// import { type SignInPageErrorParam } from '@auth/core/types'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { LoginSchema } from '@/schemas'
import { login } from '@/actions/login'
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
import { CardWrapper } from '@/components/auth/card-wrapper'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'

const LoginForm = () => {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<string>('')

  const form = useForm<LoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<LoginSchema> = (values: LoginSchema) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      login(values)
        .then((data) => {
          if (data._tag === 'success') setSuccess(data.message)
          else setError(data.message)
        })
        .catch((err: unknown) => {
          console.error(err)
        })
    })
  }

  return (
    <CardWrapper
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account?"
      headerLabel="Welcome back"
      showSocial
    >
      <Form {...form}>
        <form
          className="space-y-4"
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        >
          <FormField
            control={form.control}
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
            control={form.control}
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
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default LoginForm
