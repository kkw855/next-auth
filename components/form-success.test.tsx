import { render, screen } from '@testing-library/react'

import { FormSuccess } from './form-success'

test('성공 메시지 출력', () => {
  render(<FormSuccess message="Success" />)
  expect(screen.getByRole('alert')).toHaveTextContent('Success')
})
