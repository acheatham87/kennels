import React, { useState, useEffect } from 'react';
import { getLocationById } from '../../modules/LocationManager';
import './LocationDetail.css';
import { useNavigate, useParams } from 'react-router-dom';

export const LocationDetail = () => {
    const [location, setLocation] = useState({ name: "", address: "" });
    const {locationId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getLocationById(locationId)
        .then(location => {
            setLocation(location);
        });
    }, [locationId]);

    return (
            <section className="location">
                <h3 className="location__name">{location.name}</h3>
                <div className="location__address">Address: {location.address}</div>
            </section>

    );
}