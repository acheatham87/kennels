import React from "react"
import { Link } from "react-router-dom";
import "./Location.css"

export const LocationCard = ({location, handleDeleteLocation}) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="Location__address">{location.address}</div>
        <button type="button" onClick={() => handleDeleteLocation(location.id)}>Close</button>
        <Link to={`/locations/${location.id}`}>
            <button>Details</button>
        </Link>
    </section>
)