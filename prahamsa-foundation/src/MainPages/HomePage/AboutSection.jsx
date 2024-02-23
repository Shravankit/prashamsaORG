import React from 'react';
import { Link } from 'react-router-dom';
import './HomePageStyles/AboutSection.css';

export default function About()
{
    return <section id='about-section' className='allSections'>
        <h1>
            About Us
        </h1>
        <div className='about'>
            <div className='about-content'>
                <h1>
                    Prashamsa Foundation
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button><Link to='/about'>More About Us</Link></button>
            </div>
            <div className='about-logo'>
                <img src={'images/prahamsaLogo.png'} alt='logo organization nonprofit ngo'/>
            </div>
        </div>
    </section>
}