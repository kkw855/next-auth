// noinspection JSUnusedGlobalSymbols

import type { Meta, StoryObj } from '@storybook/react'
import { BackButton } from './back-button'

const meta = {
  title: 'BackButton',
  component: BackButton,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: { label: '뒤로가기' },
} satisfies Meta<typeof BackButton>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { href: '/back' },
}
