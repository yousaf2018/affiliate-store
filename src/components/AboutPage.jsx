import React from 'react';
import getImageUrl from '../utils';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className='about'>
            <section className="about-content">
                <h1>About Us</h1>
                <div className="note">
                    <p>
                        Our affiliate selections are carefully curated to ensure they meet our high standards of quality, affordability and aesthetic appeal.
                    </p>
                    <p>
                        Every item you see here has been handpicked to help you look and feel your best, without the hefty price tag. From skincare essentials to fashion must-haves, these products are designed to seamlessly fit into your lifestyle, helping you achieve that effortless chic look we all love.
                    </p>
                    <p>
                        And the best part? When you shop through our affiliate links, you're not only getting amazing products but also supporting this store at no extra cost to you. So go ahead, explore our collection, and find your new favourites today!
                    </p>
                </div>
            </section>
            <div className="aboutHero">
                <div className="short">
                    <p>
                        This store is all about helping you embrace your natural beauty while staying true to your unique style. Every product is chosen with love and a keen eye for quality, so you can feel confident in your purchase.
                        <br /><br />
                        Thanks for stopping by, and I hope you find something here that makes your day!
                    </p>
                    <Link to="/shop">
                        <button>Shop Now</button>
                    </Link>
                </div>
                <img src={getImageUrl('homePage/darkHero.png')} alt="" />
            </div>
        </div>
    );
};

export default AboutPage;
