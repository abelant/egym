import React, { useState } from 'react'
import './Exercise.css'

interface ExerciseProps {
    name: string;
    image: string;
    transcript: string;
    bodyAreas: [];
    idx:number;
}

const Exercise = (props: ExerciseProps) => {

    const [active, setActive] = useState("is-collapsed");

    const  toggleDetails = () => {
       setActive(active === "is-collapsed" ? "is-expanded" : "is-collapsed")
    }
   

    return (
        <div className={`card ${active}`} onClick={toggleDetails}>
           <div className="card__inner" >
                <div className="card__details">
                    <img className="card__image" src={props.image} alt=""/>
                    <div className="card__name">
                        <p>{props.bodyAreas}</p>
                        <h4>{props.name}</h4>
                    </div>
                </div>
               { active ?  
                <div className={`card__expander ${active}`}>
                    <span>{props.name}</span>
                    <div dangerouslySetInnerHTML = {{ __html: props.transcript}}></div>
                </div> 
                : null
                }
            </div>
        </div>
    )
}

export default Exercise;