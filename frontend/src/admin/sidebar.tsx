import { Link } from "react-router-dom";
import Header from "../pages/Header";

function Sidebar() {
  return (
    <>
      <Header/>
      <div className="sidebar">
        <nav>
          <ul>
            <li><Link to="/admin" className="active"> <i className="fas fa-home"></i> Home Admin</Link></li>
            <li><Link to="/admin/Add"> <i className="fas fa-info-circle"></i>Add</Link></li>
            <li><Link to="/admin/delete/:id"> <i className="fas fa-plus"></i> Delete</Link></li>
            <li><Link to="/admin/update/:id"> <i className="fas fa-code-branch"></i> Update</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Sidebar