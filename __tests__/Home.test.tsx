import Home from '@/app/page'
import { render, screen } from '@testing-library/react'

describe('Home Page', () => {
  it('renders the headline', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { name: /welcome to next\.js!/i })
    ).toBeInTheDocument()
  })
})
