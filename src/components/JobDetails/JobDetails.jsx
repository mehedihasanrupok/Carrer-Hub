import React, { useEffect, useState } from 'react';
import Vacancy from '../Vacancy/Vacancy';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css';

const JobDetails = () => {
    const {id} = useParams();
    const jobs = useLoaderData();
    console.log(jobs);
    const [jobDetails, setJobDetails] = useState([]);
    
    useEffect( ()=>{
        if(jobs){
            const jobData = jobs.find(job =>job.id == id);
            setJobDetails(jobData);
        }
    })
    console.log(jobDetails);
    return (
        <div>
            <h3 className='body-h3'>{jobDetails.id}</h3>
            <h3 className='body-h3'>{jobDetails.post_name}</h3>
            <h3 className='body-h3'>{jobDetails.company_name}</h3>
            
        </div>
    );
};

export default JobDetails;