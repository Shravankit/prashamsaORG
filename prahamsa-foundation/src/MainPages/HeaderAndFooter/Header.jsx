import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderAndFooterStyles/Header.css';

export default function Header() {
    const [dropdown, setDropdown] = useState(false);

    // const [active, setActive] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    const handleNav = (link) => {
        setActiveLink(link);
        setDropdown(false); // Close dropdown menu after clicking a link
    }
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
                    <li><Link to='/' onClick={() => handleNav('/')} className={activeLink === '/' ? 'active' : ''}>Home</Link></li>
                    <li><Link to='/about' onClick={() => handleNav('/about')} className={activeLink === '/about' ? 'active' : ''}>About</Link></li>
                    <li><Link to='/ourwork' onClick={() => handleNav('/ourwork')} className={activeLink === '/ourwork' ? 'active' : ''}>OurWork</Link></li>
                    <li><Link to='/events' onClick={() => handleNav('/events')} className={activeLink === '/events' ? 'active' : ''}>Events</Link></li>
                    <li><Link to='/contact' onClick={() => handleNav('/contact')} className={activeLink === '/contact' ? 'active' : ''}>Contact</Link></li>
                </ul>
                </div>
            </div>
        </header>
    );
}
