import React, { useState } from 'react'
import './Exercise.css'
import Modal from '../Modal/Modal'
interface ExerciseProps {
    name: string;
    image: string;
    transcript: string;
    bodyAreas: [];
    idx:number;
}

const Exercise = (props: ExerciseProps) => {
    const [showModal, setShowModal] = useState(false);

    const  openModal = () => {
        setShowModal(prev => !prev);
        if(showModal === true){
        }
    }
   
    return (
        <>
        <div className={`card is-collapsed`} onClick={openModal}>
           <div className="card__inner" >
                <div className="card__details">
                    <img className="card__image" src={props.image} alt=""/>
                    <div className="card__name">
                        <p>{props.bodyAreas}</p>
                        <h4>{props.name}</h4>
                    </div>
                </div>
            </div>
        </div>
            <Modal  showModal={showModal}  
                    setShowModal={setShowModal} 
                    content= {
                        <div>
                            <h3>{props.name}</h3>
                            <div dangerouslySetInnerHTML = {{ __html: props.transcript}}></div>
                        </div>
                    }
                    image={props.image}
            />
        </>
    )
}

export default Exercise;