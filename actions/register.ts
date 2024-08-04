'use server'

import type { ServerResponse } from '@/types'
import { RegisterSchema } from '@/schemas'

export const register = async (
  values: RegisterSchema,
): Promise<ServerResponse> => {
  const validateFields = await RegisterSchema.safeParseAsync(values)

  if (!validateFields.success)
    return { _tag: 'error', message: 'Invalid fields!' }

  return { _tag: 'success', message: 'Email sent!' }
}
