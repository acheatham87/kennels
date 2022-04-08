import React, { useEffect, useState } from "react";
import { LocationCard } from "./LocationCard";
import { getAllLocations, deleteLocation } from "../../modules/LocationManager";
import { useNavigate } from "react-router-dom";

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    const navigate = useNavigate()

    const getLocations = () => {
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        })
    }

    const handleDeleteLocation = id => {
        deleteLocation(id)
        .then(() => getAllLocations().then(setLocations))
    };

    useEffect(() => {
        getLocations();
    }, [])

    return (
        <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {navigate("/locations/create")}}>
                    Add Location
                </button>
            <div className="container-cards">
                {locations.map(location => <LocationCard 
                location={location} 
                key={location.id} 
                handleDeleteLocation={handleDeleteLocation}/>)}
            </div>
        </section>
    )
}