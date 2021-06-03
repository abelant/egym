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
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        return await axios.get<IExercise>('https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/')
    }

    useEffect(() => {
        fetchData().then(res => {
            setExercises(res.data)
            setLoading(false);
        })
    },[]);
    
    if(loading){
        return  <div data-testid="loading">Loading...</div> 
    }
   
    return (
        <>
                    <div className="wrapper" data-testid="resolved">
                        <div className="controls">
                            <button data-testid="female" onClick={() => setGender('female')} className={`${gender === 'female' ? 'active' : ''}`}>FEMALE</button>
                            <button  data-testid="male" onClick={() => setGender('male')} className={`${gender === 'male' ? 'active' : ''}`}>MALE</button>
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
        </>
    )
}

export default Exercises;