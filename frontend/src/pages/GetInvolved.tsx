import "./Page.css";
import Layout from "./Layout";
import CLSF3Image from '../images/CLSF3.png';

function GetInvolved() {
    return (
        <>
        <Layout/>
        <div className="Home">

        <div className="IMG">
            <img src={CLSF3Image} alt="CLSF3" className="CLSF3" />
        </div>

            <div className="text-header">
          <h1>Welcome to CLSF</h1>
        </div>
        
        <div className="text-body">
         
          <p><b><h2>Ministry of Involvement:</h2></b><b><h3>Children</h3></b>"Train up a child in the way he should go: and when he is old, he will not depart from it." - Proverbs 22:6 (KJV) Activities: Interactive storytelling, action-songs (clapping, jumping, lifting of hands, and dancing for God), fun games, memory verse, craft projects, many prizes and snacks, and various group activities.
          
          <br /><br />CLSF has the most outrageous, amazing Vacation Bible School (VBS) where Biblical truths are taught in an amazing high-energy, fun environment.

          <br /><br />Children are usually divided into three age-groups:

          <ul>
            <li>Toddlers (Ages 3-6)</li>
            <li>Primaries (Ages 7-9)</li>
            <li>Juniors (Ages 10-12 or 'til Grade 6)</li>
          </ul>

          <br /><b><h3>Volunteer now!</h3></b>

          <ul>
                 <li><p>Children</p></li>
                 <li><p>Youth</p></li>
                 <li><p>Families</p></li>
                 <li><p>Small Groups</p></li>
                 <li><p>Media</p></li>
                 <li><p>Music and Arts</p></li>
                 <li><p>Community</p></li>
            </ul>

         </p>
        </div>
        </div>
        </>

    )
}
export default GetInvolved;