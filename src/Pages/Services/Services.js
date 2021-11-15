import React, { useEffect, useState } from 'react';
import Service from '../Service/Service.js';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./tools.json')
            .then(res => res.json())
            .then(data => setServices(data));
    },[])
    return (
        <div className="services-container mt-4">
            {
                     services.map(service=><Service
                    key={service.key}
                    service={service}
                ></Service>)
               
            }
        </div>
    );
};

export default Services;