import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addLocation } from "../../modules/LocationManager";
import './LocationForm.css'

export const LocationForm = () => {

    const [location, setLocation] = useState({
        name: "",
        address: ""
    })

    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {
        const newLocation = { ...location }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newLocation[event.target.id] = selectedVal
        setLocation(newLocation)
    }

    const handleClickSaveLocation = (event) => {
        event.preventDefault()
        addLocation(location)
        .then(() => navigate("/locations"))
    }
    return (
        <form className="locationForm">
            <h2 classNames="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location name: </label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name} />
                </div>
            </fieldset>
            <fieldset>
                <div classname="form-group">
                    <label htmlFor="address">Location Address: </label>
                    <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location address" value={location.address} />
                </div>
            </fieldset>
            <button type="button" className="btn btn-primary"
                onClick={handleClickSaveLocation}>
                    Save Location
                </button>
        </form>
    )
}