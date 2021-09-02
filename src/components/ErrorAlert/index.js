import React from 'react'
import { Modal } from '../Modal'
import './ErrorAlert.css'
import '../../animations.css'

const ErrorAlert = () => {
    return(
        <Modal>
            <div className="ErrorAlert animate-bottom">
                <p className="ErrorAlert-text">Ocurrio un error, vuelva a intentarlo más tarde</p>
            </div> 
        </Modal>
    )
}

export { ErrorAlert }