import React from 'react';
import './Error.css';

const Error = () => {
    return (
        <div className='error'>
            <img src="../../../public/Icons/frame11.jpg" alt="" />
            <div className='Another'>
                <h1>404 The Error</h1>
                <h3 className='details'> What You are Searching Are not available Right Now</h3>
            </div>
        </div>
    );
};

export default Error;