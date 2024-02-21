import React from 'react';
import './HeaderAndFooterStyles/Footer.css';

export default function Footer()
{
    return <footer>
        <div className='footer-logo'>
            <img src={'Images/PrahamsaLogo.png'} alt='prahamsa logo organization' />
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
            <a href='/'>FaceBook</a>
            <a href='/'>Instagram</a>
            <a href='/'>Twitter</a>
            <a href='/'>LinkedIn</a>
        </div>
    </footer>
}