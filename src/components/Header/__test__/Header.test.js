import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
  test('should render same text passed into title prop', async () => {
    render(<Header title='My Header' />)
    const headingElement = screen.getByText(/my header/i)
    expect(headingElement).toBeInTheDocument()
  })
})

//  TEST BY ID -- last resort option if can't hook into elements with other methods

// test('should render same text passed into title prop', async () => {
//   render(<Header title='My Header' />)
//   const headingElement = screen.getByTestId('header-1')
//   expect(headingElement).toBeInTheDocument()
// })

//  FIND BY

// test('should render same text passed into title prop', async () => {
//     render(<Header title='My Header' />)
//     const headingElement = await screen.findByText(/my header/i)
//     expect(headingElement).toBeInTheDocument()
//   })

//  QUERY BY

// test('should render same text passed into title prop', async () => {
//     render(<Header title='My Header' />)
//     const headingElement = screen.queryByText(/dogs/i)
//     expect(headingElement).not.toBeInTheDocument()
// })

//  GET ALL BY

// test('should render same text passed into title prop', async () => {
//     render(<Header title='My Header' />)
//     const headingElements = screen.getAllByRole('heading')
//     expect(headingElements.length).toBe(2)
// })
