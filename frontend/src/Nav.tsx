import Home from "./pages/Home";
import About from "./pages/About";
import NewHere from "./pages/NewHere";
import GetInvolve from "./pages/GetInvolve";
import ContactUs from "./pages/ContactUs";
import Donation from "./Donation";
import Branches from "./pages/Branches";
import Login from "./pages/Login";


import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function Nav() {
    return (
        <div>
        <BrowserRouter>
            <div>
            <Layout/>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/NewHere' element={<NewHere/>}></Route>
                    <Route path='/GetInvolve' element={<GetInvolve/>}></Route>
                    <Route path='/ContactUs' element={<ContactUs/>}></Route>
                    <Route path='/Donation' element={<Donation/>}></Route>
                    <Route path='/Branches' element={<Branches/>}></Route>
                    <Route path='/Login' element={<Login/>}></Route>
                </Routes>
                
            </div>
        </BrowserRouter>
        </div>
    );
}

export default Nav;