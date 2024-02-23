import React, {useState} from 'react';
import axios from 'axios';
import './HomePageStyles/ContactSection.css';

export default function Contact()
{

    
    const [username, setUserName] = useState('');
    const [useremail, setUserEmail] = useState('');
    const [usersubject, setUserSubject] = useState('');
    const [usermessage, setUserMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/message', {
                name: username,
                email: useremail,
                subject: usersubject,
                message: usermessage,
            });

            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    return <section id='contact-section' className='allSections'>
        <div className='contact'>
            <div className='contact-input'>
                <h1>
                    Contact Us
                </h1>
                <input placeholder='Your Name' type='text' value={username} onChange={e => setUserName(e.target.value)} />
                <input placeholder='Your Email' type='text' value={useremail} onChange={e => setUserEmail(e.target.value)} />
                <input placeholder='Subject' type='text' value={usersubject} onChange={e => setUserSubject(e.target.value)} />
                <textarea placeholder='Message' type='text' value={usermessage} onChange={e => setUserMessage(e.target.value)} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div className='contact-image'>
                <img src={'/images/PrahamsaLogo.png'} alt='contact prashamsa oraganization' />
            </div>
        </div>
    </section>
}