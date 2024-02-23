import React, { useState, useEffect, useRef } from 'react';
import './HomePageStyles/MotroSection.css';

export default function Motto() {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef();

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.target === sectionRef.current) {
                    setInView(entry.isIntersecting);
                }
            });
        }, options);

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id='motto-section' className='allSections' ref={sectionRef}>
            <div className={`motto ${inView ? 'motto-anim' : ''}`}>
                <div className='motto-content'>
                    <p>
                        Driving people towards social responsibility, social welfare activities by conducting some activities, events and workshops for making our society a golden society.
                    </p>
                    <h2>
                        “Golden society assures golden life”
                    </h2>
                </div>
                <div className='motto-image'>
                    <img src={'/images/Motto-Image.jpg'} alt='our motto foundation organization prashamsa'/>
                </div>
            </div>
            <div className={`vision ${inView ? 'vision-anim' : ''}`}>
                <div className='vision-image'>
                    <img src={'/images/Vission-2.jpg'} alt='our motto foundation organization prashamsa'/>
                </div>
                <div className='vision-content'>
                    <p>
                        To establish golden society and to achieve golden life style, any system should maintain transparency and accountability in administration, operations and executions when dealing with public related matters.
                    </p>
                    <h2>
                        “Transparency and accountability require to establish a golden society”
                    </h2>
                </div>
            </div>
            <div className={`vision2 ${inView ? 'vision2-anim' : ''}`}>
                <div className='vision2-content'>
                    <h2>
                        To Establish a Model Society, Free of Social Evils, by Introducing and Integrating Policies.
                    </h2>
                    <h2>
                        We intend to design policies, then implement them on a sustainable society and see the effectiveness of the policies in our society at a larger level.
                    </h2>
                </div>
                <div className='vision2-image'>
                    <img src={'/images/Vission.jpg'} alt='our motto foundation organization prashamsa'/>
                </div>
            </div>
        </section>
    );
}
