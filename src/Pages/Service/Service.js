import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const {key, name,img,price,description} = service;
    return (
        <div className="service pb-3 ">
            <div>
                 <img src={img} className="w-100" alt="" />
            <h3 className="text-center">{name}</h3>
            <h3 className="text-center">Price:{price}</h3>
            <p className="p-4">{description}</p>
                <Link to={`/purchase/${key}`}>
                 <button className="btn btn-primary w-30">Purchase:  { name.toLowerCase()}</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;