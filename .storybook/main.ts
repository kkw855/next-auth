import { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: [
    '../app/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/nextjs',
  features: { experimentalRSC: true },
}

export default config
