import React from 'react'
import './Modal.css'
const GlobalModal = ({showModal, setShowModal, setGender}: any) => {

    const setMale = (value: string) => {
        setGender(value)
    }
    const setFemale = (value: string) => {
        setGender(value)
    }
     
    
    return(
        <div>
            {showModal ? 
                <div className="gloabl__modal__background"> 
                    <div className="global__modal__wrapper">
                        <h1>Get Started</h1>
                        <h3>Select your gender</h3>
                        <div className="controls">
                            <button data-testid="female" onClick={() => setMale('female')}>FEMALE</button>
                            <button data-testid="male" onClick={() => setFemale('male')}>MALE</button>
                        </div>
                    </div>
                </div>
                
            : null}
        </div>
    )
}

export default GlobalModal;