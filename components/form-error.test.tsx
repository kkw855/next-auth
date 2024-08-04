import { render, screen } from '@testing-library/react'

import { FormError } from './form-error'

test('에러 메시지 출력', () => {
  render(<FormError message="Something went wrong" />)
  expect(screen.getByRole('alert')).toHaveTextContent('Something went wrong')
})
