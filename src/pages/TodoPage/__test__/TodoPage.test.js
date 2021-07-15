import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import TodoPage from '../TodoPage'

const MockTodoPage = () => {
  return (
    <BrowserRouter>
      <TodoPage />
    </BrowserRouter>
  )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task.../i)
    const buttonElement = screen.getByRole('button', { name: /Add/i })
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } })
        fireEvent.click(buttonElement) 
    })
}

describe('TodoPage', () => {
  test('should render single element', async () => {
    render(<MockTodoPage />)
    addTask(['Go to the park'])
    const liElement = screen.getByText(/Go to the park/i)
    expect(liElement).toBeInTheDocument()
  })

  test('should render multiple elements', async () => {
    render(<MockTodoPage />)
    addTask(['Go to the park', 'Take a big dump', 'Shit some piss'])
    const liElement = screen.getAllByTestId('task-container')
    expect(liElement.length).toBe(3)
  })


  test('task should not have isComplete task when initially rendered', async () => {
    render(<MockTodoPage />)
    addTask(['Go to the park'])
    const liElement = screen.getByText(/Go to the park/i)
    expect(liElement).not.toHaveClass('isComplete')
  })

})
 