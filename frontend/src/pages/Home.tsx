import { useEffect, useState } from 'react';
import './Page.css'; // Import your Page.css file
import '../App.css'; // Import your App.css file
import CLSFImage from '../images/CLSF.jpg';
import chatboxImage from '../images/chatbox.jpg';
import Chitchat from '../Chitchat';
import Layout from './Layout';
import axios from 'axios';
import Newscard from './newscard';

function Home() {
    const [newsletters, setNewsletters] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/newsletter')
            .then(res => setNewsletters(res.data))
            .catch(err => console.log(err))
    },[])

    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

    const toggleChatbot = () => {
        setIsChatbotOpen(prevState => !prevState);
    };

    return (
        <>
            <Layout />
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

                <hr className="divider"/>
                <div>
                    <p className='NewsUpdate'>News Update</p>
                </div>

                <div>
                    {
                        newsletters.map(newsletter =>{
                            return (
                                <Newscard key={newsletter.id} newsletter={newsletter}></Newscard>
                            )
                        })
                    }
                </div>

                <label htmlFor="chatbox" className="show-chatbot">
                    <img src={chatboxImage} alt="cb" className="chatbox" onClick={toggleChatbot} />
                </label>

                {isChatbotOpen && (
                    <div className="chatbot-container">
                        <Chitchat />
                    </div>)}
            </div>
        </>
    );
}

export default Home;
