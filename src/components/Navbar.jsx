import React from 'react';
import { Link } from 'react-router-dom';
import getImageUrl from '../utils'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/" className="logo">
                <img src={getImageUrl('homePage/logo.png')} alt="logo" />
            </Link>
            <div className="links">
                <Link to="/">
                    Home
                </Link>
                <Link to="/about">
                    About
                </Link>
                <Link to="/shop">
                    Shop
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
