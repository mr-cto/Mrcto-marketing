import { render, screen } from '@testing-library/react'
import Nav from '../Nav'
import { useRouter } from 'next/navigation'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Nav component', () => {
  it('renders navigation links', () => {
    (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() })
    render(<Nav />)
    expect(screen.getByText('Mrcto Consulting')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
  })
})
