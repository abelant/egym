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
    bodyAreas: []
}
interface IExercise {
    exercises: Data[]
}

const Exercises = () => {
    const [exercises, setExercises] = useState<IExercise>();
    const [loading, setLoading]= useState<boolean>(true);
    const [error, setError] = useState("");
    const [gender, setGender] = useState('')

    useEffect(() => {
        axios.get<IExercise>('https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/')
            .then(response => {
                setExercises(response.data);
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false);
                console.log(error)
            })
    },[]);
    
    return (
        <div className="wrapper">
            <div>
                <button onClick={() => setGender('female')}>Female</button>
                <button onClick={() => setGender('male')}>Male</button>
            </div>
            {loading ? "Loading" : ''}
            <div className="cards">
                {exercises?.exercises.map((exercise, index) => {
                    return <Exercise 
                                key={exercise.id}
                                name={exercise.name}
                                image={gender === 'female' ? exercise.female.image : exercise.male.image}
                                transcript={exercise.transcript}
                                bodyAreas={exercise.bodyAreas}
                            />
                   
                })}
            </div>
            {error && <p>{error}</p>}
        </div>
    )
}

export default Exercises;