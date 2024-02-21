import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderAndFooterStyles/Header.css';

export default function Header() {
    const [dropdown, setDropdown] = useState(false);

    const handleDropdown = () => {
        setDropdown(!dropdown); // Toggle dropdown state
    }

    return (
        <header>
            <div className='header-logo'>
                <img src={'images/PrahamsaLogo.png'} alt='prahamsa organisation logo NGO foundation' />
                <h2>Prashamsa Foundation</h2>
            </div>
            <div className='header-navigation'>
                <button type='button' onClick={handleDropdown} className={`dropdown-button ${dropdown ? 'active-button' : ''}`}>|||</button>
                <div className={`dropdown-menu ${dropdown ? 'active-dropdown' : ''}`}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/ourwork'>OurWork</Link></li>
                    <li><Link to='/events'>Events</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                </div>
            </div>
        </header>
    );
}
