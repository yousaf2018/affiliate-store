import React from 'react';
import { Link } from 'react-router-dom';
import getImageUrl from '../utils'

const HomePage = () => {
    return (
        <div className='homePage'>
            <header>
                <img src={getImageUrl('homePage/lightHero.png')} alt="hero" />
                <div className="intro">
                    <h1>Welcome to The Clean Girl Affiliate Store</h1>
                    <p>Discover a curative collection of beauty, fashion, and skincare finds that perfectly capture the effortless and fresh Clean Girl aesthetic. Each item has been <strong>handpicked</strong> to help you look and feel your best-<em>without breaking the bank</em>. Dive into our selection and find your new favourites today!</p>
                    <Link to="/shop">
                        <button>Shop Now</button>
                    </Link>
                </div>
            </header>
            <section className="featured-products">
                <h2>Featured Products</h2>
                <div className="featuredWrap">
                    <div className="product">
                        <img src={getImageUrl('featured/featTop.jpg')} alt="Featured Product" />
                        <h3>Featured Product Name</h3>
                        <p>$4.00</p>
                        <Link to="/shop">
                            <button>Buy</button>
                        </Link>
                    </div>
                    <div className="line"></div>
                    <div className="product">
                        <img src={getImageUrl('featured/featShoe.jpg')} alt="Featured Product" />
                        <h3>Featured Product Name</h3>
                        <p>$4.00</p>
                        <Link to="/shop">
                            <button>Buy</button>
                        </Link>
                    </div>
                    <div className="line"></div>
                    <div className="product">
                        <img src={getImageUrl('featured/featSkirt.jpg')} alt="Featured Product" />
                        <h3>Featured Product Name</h3>
                        <p>$4.00</p>
                        <Link to="/shop">
                            <button>Buy</button>
                        </Link>
                    </div>
                    <div className="line"></div>
                    <div className="product">
                        <img src={getImageUrl('featured/featHair.jpg')} alt="Featured Product" />
                        <h3>Featured Product Name</h3>
                        <p>$4.00</p>
                        <Link to="/shop">
                            <button>Buy</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
