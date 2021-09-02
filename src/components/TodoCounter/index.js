import React, { useContext } from 'react'
import { TodoContext } from '../../contexts/TodoContext'
import './TodoCounter.css'

function TodoCounter() {
    const { totalTodos, completedTodos } = useContext(TodoContext)
    return (
        <div className="TodoCounter">
            <h2 className="TodoCounter--text">You have done <span className="TodoCounter--highlight"> {completedTodos} </span> of <span className="TodoCounter--highlight"> {totalTodos} </span> ToDo</h2>
        </div>
    )
}

export { TodoCounter }