import { render, screen, fireEvent } from '@testing-library/react'
import mockRouter from 'next-router-mock'

import { LoginButton } from './login-button'

vi.mock('next/navigation', () => vi.importActual('next-router-mock'))

test('로그인 버튼을 클릭하면 /auth/login 페이지로 이동', () => {
  render(<LoginButton>Sign in</LoginButton>)

  const button = screen.getByRole('button', { name: 'Sign in' })
  expect(button).toBeInTheDocument()

  fireEvent.click(button)
  expect(mockRouter).toMatchObject({ pathname: '/auth/login' })
})
