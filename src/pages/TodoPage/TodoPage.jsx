import { useState } from 'react'
import Header from '../../components/Header/Header'
import AddInput from '../../components/AddInput/AddInput'
import TodoList from '../../components/TodoList/TodoList'
import TodoFooter from '../../components/TodoFooter/TodoFooter'

const TodoPage = () => {
    const [todos, setTodos] = useState([])

    const calcNumOfTodos = () => {
        let count = 0;
        todos.forEach(todo => {
            if(!todo.isComplete) count++
        })
        return count
}

    return (
        <div className='min-h-screen py-36 flex justify-center'>
            <div className='w-3/5 mx-auto z-10'>
                <Header title='Todos' />
                <AddInput todos={todos} setTodos={setTodos} />
                <div className='w-full h-3/4 mt-10 flex flex-col bg-white p-2 shadow-md rounded'>
                    <TodoList todos={todos} setTodos={setTodos} />
                    <TodoFooter numberOfTodos={calcNumOfTodos()} />
                </div>
            </div>
        </div>
    )
}

export default TodoPage