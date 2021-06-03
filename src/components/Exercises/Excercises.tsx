import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Exercise from '../Excercise/Exercise'
import './Exercises.css'
interface Gender {
    image:string;
}
interface Data {
    id: string;
    name: string;
    transcript: string;
    female: Gender,
    male: Gender
    bodyAreas: [];
}
interface IExercise {
    exercises: Data[]
}

const Exercises = () => {
    const [exercises, setExercises] = useState<IExercise>();
    const [gender, setGender] = useState("male")


    useEffect(() => {
        const getData = async() => {
            try {
               const response = await axios.get<IExercise>('https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/')
               setExercises(response.data)
            } catch (err){
                return err;
            }
        }
        getData();
        
    },[]);
    
    if(!exercises){
        return <div data-testid="loading">Loading...</div> 
    }

    return (
        <div className="wrapper" data-testid="resolved">
            <div className="controls">
                <button data-testid="female-button" onClick={() => setGender('female')} className={`${gender === 'female' ? 'active' : ''}`}>FEMALE</button>
                <button  data-testid="male-button" onClick={() => setGender('male')} className={`${gender === 'male' ? 'active' : ''}`}>MALE</button>
            </div>
            
            <div className="cards" >
                {exercises?.exercises.map((exercise, index) => {
                    return <Exercise
                                key={index}
                                name={exercise.name} data-testid="resolved"
                                image={gender === 'female' ? exercise.female.image : exercise.male.image}
                                transcript={exercise.transcript}
                                bodyAreas={exercise.bodyAreas}
                            />
                })}
            </div>
            
        </div>
    )
}

export default Exercises;