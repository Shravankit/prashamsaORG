import React from 'react';
import OurWorkData from './HomePageData/OurWorkData';
import './HomePageStyles/OurWork.css';

export default function OurWork()
{
    return <section id='ourWorksection' className='allSections'>
        <div className='ourWorks'>
            {OurWorkData.map((e) => {
                return(
                <div key={e.id} className='ourWork div'>
                    <img src={e.imageUrl} alt={e.alt} />
                    <div className='ourWork-data'>
                        <h2>{e.title}</h2>
                        <p>{e.details}</p>
                    </div>
                </div>
                )
            })}
        </div>
    </section>
}