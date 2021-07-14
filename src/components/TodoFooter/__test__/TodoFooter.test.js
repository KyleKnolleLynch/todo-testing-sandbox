import { render, screen } from '@testing-library/react'
import TodoFooter from '../TodoFooter'
import { BrowserRouter } from 'react-router-dom'

const MockTodoFooter = ({ numberOfTodos }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfTodos={numberOfTodos} />
    </BrowserRouter>
  )
}

test('should render "task" when number of incomplete todos is one', async () => {
  render(<MockTodoFooter numberOfTodos={1} />)
  const paragraphElement = screen.getByText(/1 remaining task/i)
  expect(paragraphElement).toBeInTheDocument()
})


test('should render "task" when number of incomplete todos is one', async () => {
  render(<MockTodoFooter numberOfTodos={1} />)
  const paragraphElement = screen.getByTestId('para')
  expect(paragraphElement).toHaveTextContent('1 remaining task')
})
