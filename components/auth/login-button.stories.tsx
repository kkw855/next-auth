// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from '@storybook/react'
import { LoginButton } from './login-button'

const meta = {
  title: 'LoginButton',
  component: LoginButton,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: { children: '로그인' },
} satisfies Meta<typeof LoginButton>
export default meta

type Story = StoryObj<typeof meta>

export const Modal: Story = {
  args: { mode: 'modal' },
}

export const Redirect: Story = {
  args: { mode: 'redirect' },
}
