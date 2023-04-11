import React from 'react';
import './Catagory.css'

const Catagory = ({catagory}) => {
    const {image,department, job_vacancy} = catagory;
    return (
        <div className='catagory_unique'>
            <img src={image} alt="" />
            <h3 className='post'>{department}</h3>
            <p className='vacancy'>{job_vacancy}</p>          
        </div>
    );
};

export default Catagory;