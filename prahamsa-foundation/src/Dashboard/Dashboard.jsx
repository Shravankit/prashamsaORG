import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './Dashboard.css';

export default function Dashboard()
{

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/message')
        .then(response => {
            setMessages(response.data);
        })
        .catch(error => {
            console.error(error);
        })
    }, []);

    return <section id='dashboard-section' className='allSections'>
        <div className='dashboard-section'>
            <h1>Messages</h1>
            <div className='dashboard-content'>
                {messages.map((message) => {
                    return <div key={message._id} className='dashboard'>
                        <h1>{message.name}</h1>
                        <p>{message.email}</p>
                        <h2>{message.subject}</h2>
                        <p>{message.message}</p>
                    </div>
                })}
            </div>
        </div>
    </section>
}