import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Share/Navbar';
import Footer from './Share/Footer';

const MainRoute = () => {
    const location = useLocation()
    const TargetedLocation = location.pathname.includes('/Login') || location.pathname.includes('/SignUp')
    return (
        <div>
            {
                TargetedLocation || <div className='fixed w-full z-10'>
                    <Navbar></Navbar>
                </div>
            }
            <Outlet></Outlet>
            {
                TargetedLocation || <Footer></Footer>
            }
        </div>
    );
};

export default MainRoute;