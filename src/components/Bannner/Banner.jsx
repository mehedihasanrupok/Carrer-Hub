import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div>
                <h2 className='motivation'>One Step Closer To Your <span className='special-word'>Dream Job</span></h2>
                <p className='details'>Explore thousands of job opportunities with all the information you need. Its your future.
                    Come find it. Manage all your job application from start to finish.</p>
                <button className='start-button'>Get Started</button>
            </div>
            <div className='img'>
                <img src="../../../public/All Images/P3OLGJ1 copy 1.png" alt="" srcset="" />
            </div>
        </div>
    );
};

export default Banner;