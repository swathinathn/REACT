import React from 'react'
import './Service.css';
import { Link, Outlet } from 'react-router-dom';

const Services = () => {
    return (
        <div className='services-container'>
            <h2 className='services-title'>Our services</h2>
            <p className='services-subtitle'>choose one of our services below</p>
            <div className='services-links'>
                {/* web dev */}
                <Link to='web-dev' className='service-link web'> Web Development
                </Link>
                {/* app dev */}
                 <Link to='app-dev' className='service-link app'> app decelopment</Link>


            </div>
            {/* nested route content */}
            <Outlet/>
            

        </div>
    )
}

export default Services
