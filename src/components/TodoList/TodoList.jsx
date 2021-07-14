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
        <ul>
            {todos.map(todo => (
                <li key={todo.id} className={`pt-3 text-lg cursor-pointer ${todo.isComplete && 'text-gray-400 line-through'}`} onClick={() => markComplete(todo.id)}>{todo.todo}</li>
            ))}
        </ul>
    )
}

export default TodoList