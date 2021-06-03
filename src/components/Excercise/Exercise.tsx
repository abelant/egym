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
                        <p>{props.bodyAreas.join(' ')}</p>
                        <h4>{props.name}</h4>
                    </div>
                </div>
            </div>
        </div>
            <Modal  showModal={showModal}  
                    setShowModal={setShowModal} 
                    content= {
                        <div className="content">
                            <h2 className="content__title">{props.name}</h2>
                            <span className="content__category">{props.bodyAreas.join(' ')}</span>
                            <div dangerouslySetInnerHTML = {{ __html: props.transcript}}></div>
                        </div>
                    }
                    image={props.image}
            />
        </>
    )
}

export default Exercise;