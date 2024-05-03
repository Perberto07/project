import "./Page.css";
import Layout from "./Layout";
import CLSF2Image from '../images/CLSF2.png';

function NewHere() {
  return (
    <>
      <Layout/> 
      <div className="Home">
        <div className="IMG">
          <img src={CLSF2Image} alt="CLSF2" className="CLSF2" />
        </div>
        
        <div className="text-header">
          <h1>Welcome to CLSF</h1>
        </div>
        
        <div className="text-body">
          <p><b><h2>What to expect</h2></b>No matter what you look like, what you are about, or what you believe about God, you will feel welcome at CLSF.
            <ul>
                 <li><p>The service starts at 9:30AM on Sundays.</p></li>
                 <li><p>A greeting team that will welcome you and help you find a seat.</p></li>
                 <li><p>A copy of the CLSF's weekly newsletter, Eagle Christian.</p></li>
                 <li><p>A big group of people fellow shipping together as one family.</p></li>
                 <li><p>A message based on Scripture that is relevant to your life.</p></li>
                 <li><p>A contemporary worship band that will lead the congregation into worshiping God.</p></li>
                 <li><p>A separate Sunday School for children.</p></li>
                 <li><p>Casual to semi-formal attire: jeans, shorts, t-shirts, etc.</p></li>
                 <li><p>Friendly people.</p></li>
            </ul>
         </p>
        </div>

        <div className="text-body">
          <p><b><h2>Know More About Jesus</h2></b>"For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life." - John 3:16
          <br></br><br></br> Here at CLSF, we believe:
            <ul>
                 <li><p>The one God eternally existing in three distinct, divine Persons, Father, Son and Holy Spirit, Who created man by a direct immediate act;</p></li>
                 <li><p>The pre-existence, incarnation, virgin birth, sinless life, miracles, substitutionary death, boldly resurrection, ascension to heaven, and the second coming of the Lord Jesus Christ;</p></li>
            </ul>
         </p>
        </div>

        <hr/>
      </div>
    </>
  );
}

export default NewHere;
