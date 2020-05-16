import Index from '../src/pages/index'
import React from 'react'
import { render } from '@testing-library/react'

test('renders deploy link', () => {
  const { getByText } = render(<Index />)
  const linkElement = getByText('About')
  expect(linkElement).toBeInTheDocument()
})