// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from '@storybook/react'
import { FormSuccess } from './form-success'

const meta = {
  title: 'FormSuccess',
  component: FormSuccess,
} satisfies Meta<typeof FormSuccess>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { message: '성공' },
}
