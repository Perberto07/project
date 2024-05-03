  import Sidebar from "./sidebar"
  import "../pages/Page.css";
  import { useEffect, useState } from "react";
  import axios from "axios";
  import AdminCard from "./AdminCard";
  import "./admin.css";
  import "../pages/Layout.css"
import { Link } from "react-router-dom";



  function HomeAdmin() {
    const [newsletters, setNewsletters] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:8081/newsletter')
        .then(res => setNewsletters(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
      <>
      <div  className="admin">
        <Sidebar />
        <div className="admincard">
          <div>
            {
              newsletters.map((newsletter, index) => {
                return (
                  <AdminCard key={index} newsletter={newsletter}></AdminCard>
                )
              })
            }
          </div>
          <Link to="/admin/Add"><button className="add-button">Add</button></Link>
        </div>
        </div>
      </>
    )
  }
  export default HomeAdmin;
