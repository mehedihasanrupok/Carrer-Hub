import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar-container'>
            <div>
                <h2 className='title-bar'>Timely Talents</h2>
            </div>
            <div className='link'>
                <Link className='general'  to="/">Home</Link>
                <Link className='statistics'  to="/statistics">Statistics</Link>
                <Link className='general' to="/appliedJobs">Applied Jobs</Link>
                <Link className='general' to="/blog">Blog</Link>
            </div>
            <div>
                <button className='apply-button'>Start Applying</button>
            </div>
        </nav>
    );
};

export default Header;