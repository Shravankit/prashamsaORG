import React from 'react';
import HeroSection from './HomePage/HeroSection';
import About from './HomePage/AboutSection';
import Motto from './HomePage/MottoSection';
import Contact from './HomePage/ContactSection';
import OurWork from './HomePage/OurWork';

export default function Home()
{
    return <section>
        <HeroSection />
        <About />
        <OurWork />
        <Motto />
        <Contact />
    </section>
}