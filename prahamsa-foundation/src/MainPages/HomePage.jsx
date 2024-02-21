import React from 'react';
import HeroSection from './HomePage/HeroSection';
import About from './HomePage/AboutSection';
import Motto from './HomePage/MottoSection';
import Contact from './HomePage/ContactSection';
import Events from './HomePage/Events';

export default function Home()
{
    return <section>
        <HeroSection />
        <About />
        <Events />
        <Motto />
        <Contact />
    </section>
}