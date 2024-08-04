// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from '@storybook/react'
import { FormError } from './form-error'

const meta = {
  title: 'FormError',
  component: FormError,
} satisfies Meta<typeof FormError>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { message: '에러' },
}
