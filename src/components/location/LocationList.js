import React, { useEffect, useState } from "react";
import { LocationCard } from "./LocationCard";
import { getAllLocations } from "../../modules/LocationManager";

export const LocationList = () => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        })
    }

    useEffect(() => {
        getLocations();
    }, [])

    return (
        <div className="container-cards">
            {locations.map(location => <LocationCard location={location} key={location.id} />)}
        </div>
    )
}