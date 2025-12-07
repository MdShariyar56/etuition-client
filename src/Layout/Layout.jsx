import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';


const Layout = () => {
    return (
       <div className='bg-gray-200 '>
           <div className='max-w-7xl mx-auto '>
            <Navbar></Navbar>
             <Outlet></Outlet>
            <Footer></Footer>
        </div>
       </div>
    );
};

export default Layout;