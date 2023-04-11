import React from 'react';
import './Vacancy.css';

const Vacancy = ({ vacancy }) => {
    const { company_image, post_name, company_name, job_nature, job_time, company_location, salary_range } = vacancy
    return (
        <div className='main_div'>
            <img src={company_image} alt="" />
            <h4 className='post'>{post_name}</h4>
            <h5 className='company'>{company_name}</h5>
            <div className='job_quality'>
                <h5 className='job-nature'>{job_nature}</h5>
                <h5 className='job-nature'>{job_time}</h5>
            </div>
            <div className='job_salary'>
                <p className='location'><img src="../../../public/Icons/Location Icon.png" alt="" />{company_location}</p>
                <p className='location'><img src="../../../public/Icons/Frame.png" alt="" />Salary:{salary_range}</p>
            </div>
            <button className='button'>View Details</button>

        </div>
    );
};

export default Vacancy;