import React from 'react'

import './TodoItem.css'

function TodoItem({ text, completed, onTodoChangeStatus, onDeleteTodo }) {

    return (
        <div className="TodoItem">
            <i 
                className={!(completed) ? "TodoItem--status far fa-circle" : "TodoItem--status far fa-check-circle"} 
                onClick={onTodoChangeStatus}    
            />
            <p className="TodoItem--text">{text}</p>
            <i 
                className="TodoItem--delete fas fa-minus-circle"
                onClick={onDeleteTodo}    
            />
        </div>
    )
}

export { TodoItem }
