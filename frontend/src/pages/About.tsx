import "./Page.css";
import ACLSFImage from '../images/ACLSF.jpg';
import Layout from "./Layout";

function About(){
    return(
        <>
        <Layout/>
        <div  className="Home">
            <div className="IMG">
                <img src={ACLSFImage} alt="ACLSF" className="ACLSF" />
            </div>

            <div className="text-header">
                <h1>Welcome to CLSF</h1>
            </div>

            <div className="text-body">
                <p> "You also, like living stones, are being built into a spiritual house to be a holy priesthood, offering spiritual sacrifices acceptable to God through Jesus Christ."</p>
            </div>

            <hr/>
            <div className="text-header">
                <h1>ABOUT US</h1>
            </div>

            <div className="text-body">
                <p> From its humble beginnings as a campus ministry in the 70's, otherwise known as the Jesus People Movement, 
                    Christ, the Living Stone Fellowship blossomed into a global prophetic ministry with more than 500 churches 
                    in the Philippines and worldwide.<br/><br/>
                    Prophesied twice by leading prophets as a Philadelphia church, CLSF seeks to remain faithful to the calling, 
                    the character, grace and anointing of the Philadelphia church as written in Rev. 3:7-13. As a prophetic church, 
                    CLSF will continue to proclaim the Gospel of the Kingdom (Matt. 24:14), plant more churches all over the Philippines 
                    and many parts of the world pursuant to the Great Commission (Matt. 28:18-20) and raise up the Bride of Christ (Rev. 19:7) 
                    in these Last Days.
                    </p>
            </div>
            <hr/>

            <div className="text-header">
                <h1>Our Vision</h1>
            </div>

            <div className="text-body">
                <p> We are a Christ-centered, Spirit-filled, missions-oriented church, where every member is a minister, transforming individuals, 
                    communities and nations through the Gospel of the Kingdom of God
                    </p>
            </div>
            <hr/>

            <div className="text-header">
                <h1>Our Mision</h1>
            </div>
            <div className="text-body">
                <p> To bring Individuals, communities and nations to the saving knowledge of the Lord Jesus Christ through gospel proclamation, 
                    bringing the believers to intimacy with God through a lifestyle of worship and prayer and equipping them for ministry work 
                    through effective and dynamic discipleship and leadership training.
                    </p>
            </div>
            <hr/>

            <div className="text-header">
                <h1>Core Values</h1>
            </div>

            <div className="text-body">
                <dl>
                    <dt><b>C</b>hrist-Likeness (Romans 8:29)</dt>
                    <dd>For those God foreknew he also predestined to be conformed to the image of his Son, that he might be the firstborn among many brothers and sisters. </dd> <br></br>
                    <dt><b>L</b>ove for God (Matthew 22:37)</dt>
                    <dd>Jesus replied: "'Love the Lord your God with all your heart and with all your soul and with all your mind.'</dd><br></br>
                    <dt><b>S</b>ervant-Leadership (Mathew 20:28)</dt>
                    <dd>Just as the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.</dd><br></br>
                    <dt><b>F</b>aithfulness to the Gospel</dt><br></br>
                    <dt><b>I</b>ntercession and Prayer (Mathew 21:13)</dt>
                    <dd>“It is written,” he said to them, “‘My house will be called a house of prayer,’ but you are making it ‘a den of robbers.’”</dd><br></br>
                    <dt><b>N</b>ationalism (Romans 10:1)</dt>
                    <dd> Brothers and sisters, my heart’s desire and prayer to God for the Israelites is that they may be saved.</dd><br></br>
                    <dt><b>C</b>ovenant Leadership (1 John 3:16)</dt>
                    <dd> This is how we know what love is: Jesus Christ laid down his life for us. And we ought to lay down our lives for our brothers and sisters.</dd><br></br>
                </dl>
            </div>
            <hr/>

            <div className="text-header">
                <h1>STATEMENT OF FAITH</h1> 
            </div>

            <div className="text-body">
            <p>We believe in:
                <ol>
                    <li> The inspiration of the Bible, equally in all and without error in its origin, its accuracy and infallibility.</li><br/>
                    <li> The one God eternally existing in three distinct, divine Persons, Father, Son and Holy Spirit, Who created man by a direct immediate act; </li><br/>
                    <li> The pre-existence, incarnation, virgin birth, sinless life, miracles, substitutionary death, boldly resurrection, ascension to heaven, and the second coming of the Lord Jesus Christ;</li><br/>
                    <li> The fall of man, the need of regeneration by the operation of the Holy Spirit on the basis of grace alone, and the resurrection of all to life or damnation; </li><br/>
                    <li> The spiritual relationship of all believers in the Lord Jesus Christ, living a life of righteous works and separated from the system of the world; </li><br/>
                    <li> The baptism or infilling of the Holy Spirit Who empowers the church as witnesses in these last days, and by God's anointing the spiritual gifts are manifest even with signs and wonders;</li><br/>
                    <li> The authority of born-again believers with the Lord Jesus Christ over wicked spirits, principalities, powers and rulers of darkness of this age, over physical elements, over infirmities or sicknesses, and over supernatural elements. </li><br/>
                </ol>
                </p>
            </div> 


            

        </div>
        </>
    )
}
export default About;