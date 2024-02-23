import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './HeaderAndFooterStyles/Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className='footer-logo'>
                <img src={'images/PrahamsaLogo.png'} alt='prahamsa logo organization' />
                <div className='footer-name'>
                    <h1>
                        Prashamsa Foundation
                    </h1>
                    <p>
                        Art Of Giving Joy Of Giving
                    </p>
                </div>
            </div>
            <div className='social-media'>
                <a href='/'><FaFacebookF /></a>
                <a href='/'><FaTwitter /></a>
                <a href='/'><FaInstagram /></a>
                <a href='/'><FaLinkedinIn /></a>
            </div>
        </footer>
    );
}
