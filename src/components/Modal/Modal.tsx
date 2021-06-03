import React from 'react'
import './Modal.css'

const Modal = ({showModal, setShowModal, content, image}: any) => {

    return(
        <>
            {showModal ? 
                <div className="modal__background" > 
                    <div className="modal__wrapper">
                        <div className="modal__image">
                            <img src={image} alt=""/>
                        </div>
                        <div className="modal__content">
                            {content}
                        </div>
                        <div className="modal__close" onClick={() => setShowModal((prev:Boolean) => !prev)}>
                            X
                        </div>
                    </div>
                </div>
                
            : null}
        </>
    )
}

export default Modal;