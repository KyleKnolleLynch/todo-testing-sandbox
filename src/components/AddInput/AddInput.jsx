import { useState } from 'react'
import { v4 } from 'uuid'

const AddInput = ({ todos, setTodos }) => {
    const [todo, setTodo] = useState('')

    const addTodo = () => {
        if (!todo) return
        let newTodo = [
            ...todos, {
                id: v4(),
                todo,
                isComplete: false,
            }
        ]
        setTodos(newTodo)
        setTodo('')
    }

    return (
        <div className='w-full mt-10 px-3 py-2 flex items-center justify-between bg-white rounded'>
            <input type="text" className='w-3/4 text-lg outline-none' placeholder='Add a new task here...' value={todo} onChange={e => setTodo(e.target.value)} />
            <button className='px-5 py-1 bg-blue-300 text-white text-lg rounded' onClick={addTodo}>Add</button>
        </div>
    )
}

export default AddInput