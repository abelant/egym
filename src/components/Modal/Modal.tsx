import React from 'react'
import './Modal.css'
import close from '../../close.png'
const Modal = ({showModal, setShowModal, content, image}: any) => {
   

    const closeModal = () => {
        setShowModal((prev:Boolean) => !prev)
    }
     
    const style = {
        width:'20px',
        height:'20px'
    }
    
    return(
        <div>
            {showModal ? 
                <div className="modal__background" > 
                    <div className="modal__wrapper">
                        <div className="modal__image">
                            <img src={image} alt=""/>
                        </div>
                        <div className="modal__content">
                            {content}
                        </div>
                        <div className="modal__close" data-testid="close" onClick={closeModal}>
                            <img style={style} src={close} alt=""/>
                        </div>
                    </div>
                </div>
                
            : null}
        </div>
    )
}

export default Modal;