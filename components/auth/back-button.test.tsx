import { render, screen, fireEvent } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider'

import { BackButton } from './back-button'

test('링크를 클릭하면 href URL 로 이동', () => {
  render(<BackButton href="/back" label="Back" />, {
    wrapper: MemoryRouterProvider,
  })

  const link = screen.getByRole('link', { name: 'Back' })
  expect(link).toBeInTheDocument()

  fireEvent.click(link)
  expect(mockRouter.asPath).toEqual('/back')
})
