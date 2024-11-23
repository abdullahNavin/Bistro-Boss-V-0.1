import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Share/Navbar';
import Footer from './Share/Footer';

const MainRoute = () => {
    return (
        <div>
            <div className='fixed w-full z-10'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainRoute;