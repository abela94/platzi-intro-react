import React, { useContext, useState } from 'react'
import { TodoContext } from '../../contexts/TodoContext'

import './TodoForm.css'

function TodoForm() {
    const [newTodo, setNewTodo] = useState('')
    const {
        onAddTodo,
        setOpenModal
    } = useContext(TodoContext)
    
    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = ({ target }) => {
        setNewTodo(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        onAddTodo(newTodo)
        setOpenModal(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Todo create</label>
            <textarea 
                placeholder="Descripcion del todo"
                value={newTodo}
                onChange={onChange}    
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button-cancel"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button-add"
                >
                    Crear
                </button>
            </div>
        </form>
    )
}

export { TodoForm }