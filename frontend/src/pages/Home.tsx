import React, { useState } from 'react';
import './Page.css'; // Import your Page.css file
import '../App.css'; // Import your App.css file
import CLSFImage from '../images/CLSF.jpg';
import chatboxImage from '../images/chatbox.jpg';
import Chitchat from '../Chitchat';

function Home() {
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

    const toggleChatbot = () => {
        setIsChatbotOpen(prevState => !prevState);
    };

    return (
        <>
            <div className="Home">
                <div className='IMG'>
                    <img src={CLSFImage} alt="CLSF" className="CLSF" />
                </div>
                <div className="text-header">
                    <h1>Welcome to CLSF</h1>
                </div>
                <div>
                    <p className="text-body">Christ, the Living Stone Fellowship (CLSF) is a Christ-centered church, encouraging one another as one family, transforming individuals, communities and nations through the proclamation of the Gospel of the Kingdom of God.</p>
                </div>
            </div>

            <label htmlFor="chatbox" className="show-chatbot">
                <img src={chatboxImage} alt="cb" className="chatbox" onClick={toggleChatbot} />
            </label>

            {isChatbotOpen && (
                <div className="chatbot-container">
                    <Chitchat />
                </div>
            )}
        </>
    );
}

export default Home;