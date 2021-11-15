import React, { useEffect, useState } from 'react';
import HeroArea from '../../Components/Header/HeroArea.js';
import Banner from '../Banner/Banner.js';
import NewArival from '../NewAraival/NewArival.js';
import Service from '../Service/Service.js';
// import Services from '../Services/Services.js';
import './Home.css'
const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./tools.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0,6)));
    },[])
    return (
        <>
            <Banner></Banner>
            {/* <Services></Services> */}

            <h3 className="text-center">Our Product</h3>
            <div className="home mt-4">
                
                {
                services.map(service=><Service
                    key={service.key}
                    service={service}
                ></Service>)
            }
            </div>

            <NewArival></NewArival>
            <HeroArea></HeroArea>
        </>
    );
};

export default Home;