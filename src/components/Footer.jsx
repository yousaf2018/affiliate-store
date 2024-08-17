import React from 'react';
import { Link } from 'react-router-dom';
import getImageUrl from '../utils'

const Footer = () => {
    return (
        <div className='footerWrap'>
            <div className='footer'>
                <Link to="/" className="logo">
                    <img src={getImageUrl('homePage/logo.png')} alt="logo" />
                    <p>The Clean Girl Affiliate Store</p>
                </Link>
                <div className="social">
                    <h4>Social</h4>
                    <div>
                        <a href="http://google.com">
                            Pinterest
                        </a>
                        <a href="http://google.com">
                            Twitter
                        </a>
                        <a href="http://google.com">
                            Threads
                        </a>
                        <a href="http://google.com">
                            Instagram
                        </a>
                    </div>
                </div>
                <div className="contact">
                    <h4>Contact</h4>
                    <a href="mailto:rosieebluu@gmail.com">rosieebluu@gmail.com</a>
                </div>
            </div>
            <h6>(<i>Disclosure: This is an affiliate store. If you purchase through these links, i may earn a commision at no extra cost to you.</i>)</h6>
        </div>
    );
};

export default Footer;
