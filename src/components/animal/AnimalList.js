import React, { useEffect, useState } from "react";
//import the components we will need
import { AnimalCard } from './AnimalCard';
import { getAllAnimals, deleteAnimal } from "../../modules/AnimalManager";
import { useNavigate } from "react-router-dom";

export const AnimalList = () => {
    // The initial state is an empty array
    const [animals, setAnimals] = useState([])
    const navigate = useNavigate()

    const getAnimals = () => {
        // After the data comes back from the API, we use the setAnimals function to update state
        return getAllAnimals().then(animalsFromAPI => {
            setAnimals(animalsFromAPI)
        })
    }

    const handleDeleteAnimal = id => {
        deleteAnimal(id)
        .then(() => getAllAnimals().then(setAnimals))
    };

    // got the animlas from the API on the component's first render
    useEffect(() => {
        getAnimals();
    }, [])

    // Finally we use .map() to "loop over" the animals array to show a list of animal cards
    return (
        <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {navigate("/animals/create")}}>
                    Admit Animal
                </button>
            <div className="container-cards">
                {animals.map(animal => <AnimalCard 
                animal={animal} 
                key={animal.id} 
                handleDeleteAnimal={handleDeleteAnimal} />)}
            </div>
        </section>
    )
}
