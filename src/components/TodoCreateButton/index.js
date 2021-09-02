import React from 'react'
import './TodoCreateButton.css'

function TodoCreateButton({ openModal, setOpenModal }) {
    const onClickButton = () => {
        setOpenModal(!openModal)
    }
    
    return (
        <button 
            className="TodoCreateButton"
            onClick={onClickButton}    
        >
            <i className="TodoCreateButton-icon fas fa-plus" />
        </button>
    )
}

export { TodoCreateButton }
