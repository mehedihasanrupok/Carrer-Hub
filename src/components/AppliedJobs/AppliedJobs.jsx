import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import Applied from '../Applied/Applied';
import './AppliedJobs.css'

const AppliedJobs = () => {

    const [data,setData] = useState([]);
    
    useEffect(()=>{
        const newCart = JSON.parse(localStorage.getItem('appliedJobs')) || [];
        setData(newCart);
    }, [])

    console.log(data);
    let value;
    
    // data.map( ds =)

    return (
        <div className='applied-jobs'>
            {
                data.map( ds => <Applied
                    key={ds.id}
                    ds={ds}>
                </Applied>)
            }
        </div>
    );
};

export default AppliedJobs;