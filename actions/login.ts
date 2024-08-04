'use server'

import type { ServerResponse } from '@/types'
import { LoginSchema } from '@/schemas'

export const login = async (values: LoginSchema): Promise<ServerResponse> => {
  const validateFields = await LoginSchema.safeParseAsync(values)

  if (!validateFields.success)
    return { _tag: 'error', message: 'Invalid fields! ' }

  // const { email, password } = validateFields.data

  return { _tag: 'success', message: 'Success' }
}
