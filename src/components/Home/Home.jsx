import React, { useEffect, useState } from 'react';
import Banner from '../Bannner/Banner';
import { useLoaderData } from 'react-router-dom';
import './Home.css';
import Catagory from '../Catagory/Catagory';
import Vacancy from '../Vacancy/Vacancy';


const Home = () => {
    const vacancies = useLoaderData();
    console.log(vacancies);
    const [jobCatagories, setJob] = useState([]);
    console.log(jobCatagories);

    useEffect(() => {
        fetch('jobCatagory.json')
            .then((res) => res.json())
            .then((data) => setJob(data))
    }, []);


    const [index, setIndex] = useState(4);
    const initialPosts = index;
    const loadMore = () => {
        setIndex(index + 2);
      } 
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className='catagory-container'>
                <h3 className='job-title'>Job Category List</h3>
                <p className='description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='each-catagory'>
                    {
                        jobCatagories.map(catagory => <Catagory
                            key={catagory.id}
                            catagory={catagory}>
                        </Catagory>)
                    }
                </div>
            </div>

            <div className='vacancy-container'>
                <h3 className='job-title'>Featured Jobs</h3>
                <p className='description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='each-vacancy'>
                    {
                        vacancies.slice(0,initialPosts).map(vacancy => <Vacancy
                        key = {vacancy.id}
                        vacancy={vacancy}
                        ></Vacancy>)
                    }
                </div>
                <button onClick={loadMore} className='seeAll'>See More</button>
            </div>

        </div>
    );
};

export default Home;