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
                        <a href="https://pin.it/7o4iPW4oF" target='_blank' rel='noreferrer'>
                            <i class="fi fi-brands-pinterest"></i><p>Pinterest</p>
                        </a>
                        <a href="https://www.instagram.com/thecleangirl_ae?utm_source=qr&igsh=dnNvOXhhcm9jeDBk" target='_blank' rel='noreferrer'>
                            <i class="fi fi-brands-instagram"></i><p>Instagram</p>
                        </a>
                        <a href="https://x.com/thecleangirl_ae?t=23awBOwj64obfgftX_Eaxg&s=09" target='_blank' rel='noreferrer'>
                            <i class="fi fi-brands-twitter-alt-circle"></i><p>Twitter</p>
                        </a>
                        <a href="https://www.threads.net/@thecleangirl_ae" target='_blank' rel='noreferrer'>
                            <i class="fi fi-brands-instagram"></i><p>Threads</p>
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
