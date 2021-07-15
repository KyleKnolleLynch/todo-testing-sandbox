const TodoList = ({ todos, setTodos }) => {

    const markComplete = (id) => {
        let updatedTodo = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
                return todo
            } else {
                return todo
            }
        })
        setTodos(updatedTodo)
    }


    return (
        <ul className='divide-dotted divide-y-2 divide-yellow-200'>
            {todos.map(todo => (
                <li key={todo.id} className={`pt-2 text-lg cursor-pointer ${todo.isComplete && 'text-gray-400 line-through'}`} onClick={() => markComplete(todo.id)} data-testid='task-container'>{todo.todo}</li>
            ))}
        </ul>
    )
}

export default TodoList