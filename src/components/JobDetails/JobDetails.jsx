import React, { useEffect, useState } from 'react';
import Vacancy from '../Vacancy/Vacancy';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css';
import { addToDb } from '../../utilities/fakedb';

const JobDetails = () => {
    const { id } = useParams();
    console.log(id);
    const jobs = useLoaderData();
    console.log(jobs);
    const [jobDetails, setJobDetails] = useState({});


    const [cart, setCart] = useState([]);

    const handleAddToCart = () => {
        // const newCart = [...cart, jobDetails];
        // setCart(newCart);
        // addToDb(jobDetails);
        const newCart = JSON.parse(localStorage.getItem('appliedJobs')) || [];
        localStorage.setItem('appliedJobs', JSON.stringify([...newCart,jobDetails]));
    }
    // console.log(cart);


    useEffect(() => {
        // if (jobs) {
            const jobData = jobs.find(job => job.id == id);
            setJobDetails(jobData);
        // }
    },[])
    console.log(jobDetails);
    return (
        <div>
            <div className='Head'>
                <h1  className='head-text'>Job Details</h1>
            </div>
            <div className='full-body'>
                <div>
                    <p className='body-h3'>Job Description: <span className='body-detail'>{jobDetails.job_description}</span></p>
                    <p className='body-h3'>Job Responsibility: <span className='body-detail'>{jobDetails.job_responsibility}</span></p>
                    <p className='body-h3'>Educational Requirements: <br /> <span className='body-detail'>{jobDetails.educational_requirements}</span></p>
                    <p className='body-h3'>Experiences: <br /><span className='body-detail'>{jobDetails.experience}</span></p>
                    
                </div>
                <div>
                <div className='card'>
                     <h3 className='body-p'>Job Details</h3>
                     <hr />
                     <p className='body-p'><img src="../../../public/Icons/Frame.png" alt="" />Salary: <span className='inside-details'>{jobDetails.salary_range}</span></p>
                     <p className='body-p'><img src="../../../public/Icons/Frame-1.png" alt="" />Job Title: <span className='inside-details'>{jobDetails.post_name}</span></p>
                     <hr />
                     <p className='body-p'><img src="../../../public/Icons/Frame-2.png" alt="" />Phone: <span className='inside-details'>{jobDetails.phone}</span></p>
                     <p className='body-p'><img src="../../../public/Icons/Frame-3.png" alt="" />Email: <span className='inside-details'>{jobDetails.email}</span></p>
                     <p className='body-p'><img src="../../../public/Icons/Frame-4.png" alt="" />Address: <span className='inside-details'>{jobDetails.company_location}</span></p>

                </div>
                <button className='apply-button' onClick={handleAddToCart}>Apply Now</button>
                </div>
                
            </div>

        </div>
    );
};

export default JobDetails;