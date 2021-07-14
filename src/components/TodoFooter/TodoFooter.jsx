import { Link } from 'react-router-dom'

const TodoFooter = ({ numberOfTodos }) => {
    return (
        <div className='w-full flex items-center justify-between mt-auto p-3 pt-6'>
            <p data-testid='para'>{numberOfTodos} remaining {numberOfTodos === 1 ? 'task' : 'tasks'}</p>
            <Link to='/followers'>Followers</Link>
        </div>
    )
}

export default TodoFooter