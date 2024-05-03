import Home from "./pages/Home";
import About from "./pages/About";
import NewHere from "./pages/NewHere";
import GetInvolved from "./pages/GetInvolved";
import ContactUs from "./pages/ContactUs";
import Donation from "./Donation";
import Branches from "./pages/Branches";
import Login from "./pages/Login";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./admin/Add";
import Delete from "./admin/delete";
import Update from "./admin/update";
import HomeAdmin from "./admin/HomeAdmin";


const AdminPage = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomeAdmin/>}></Route>
                <Route path='/Add' element={<Add/>}></Route>
                <Route path='/delete/:id' element={<Delete />}></Route>
                <Route path='/update/:id' element={<Update/>}></Route>
            </Routes>
        </>
    );
};

const UserPage = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/NewHere' element={<NewHere />}></Route>
                <Route path='/GetInvolve' element={<GetInvolved />}></Route>
                <Route path='/ContactUs' element={<ContactUs />}></Route>
                <Route path='/Donation' element={<Donation />}></Route>
                <Route path='/Branches' element={<Branches />}></Route>
                <Route path='/Login' element={<Login />}></Route>
            </Routes>
        </>
    );
};

function Nav() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path='/*' element={<UserPage/>}></Route>
                        <Route path='/admin/*' element={<AdminPage />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Nav;