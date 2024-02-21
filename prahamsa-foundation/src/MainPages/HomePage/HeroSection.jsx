import React from 'react';
import { Link } from 'react-router-dom';
import './HomePageStyles/HeroSection.css';

export default function HeroSection()
{
    return <section id='hero-section' className='allSections'>
        <div className='heroSection-content'>
            <h1>
                Art Of Giving,
                Joy Of Giving
            </h1>
            <h3>
                Sow Joy, Reap Joy: Embrace the Art of Giving
            </h3>
            <button><Link to='/ourwork'>Explore More</Link></button>
        </div>
        <div className='heroSection-image'>
            <img src={'images/HeroContentImage.jpg'} alt='children happy foundation' />
        </div>
    </section>
}