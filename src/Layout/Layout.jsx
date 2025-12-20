import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';


const Layout = () => {
    return (
       <div className=' '>
           <div className='max-w-[1400px] mx-auto '>
            <Navbar></Navbar>
             <Outlet></Outlet>
            
        </div>
        <Footer></Footer>
       </div>
    );
};

export default Layout;