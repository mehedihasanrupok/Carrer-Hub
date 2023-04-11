import React from 'react';
import Banner from '../Bannner/Banner';
import { useLoaderData } from 'react-router-dom';
import './Home.css';
import Catagory from '../Catagory/Catagory';


const Home = () => {
    const jobCatagories = useLoaderData();
    console.log(jobCatagories);
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

        </div>
    );
};

export default Home;