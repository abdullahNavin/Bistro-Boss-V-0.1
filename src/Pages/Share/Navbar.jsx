import React from 'react';
import Headroom from 'react-headroom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <Headroom>
            <div className='bg-[#00000080] py-2 home'>
                <div className='sm:max-w-[95%] max-w-[90%] mx-auto text-white flex justify-between items-center' >
                    <div>
                        <h1 className='text-2xl font-bold'>BISTRO BOSS</h1>
                        <h1 className='tracking-[8px]'>RESTURANT</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <ul className='md:flex gap-3 font-bold'>
                            <li><NavLink to={'/'}>HOME</NavLink></li>
                            <li><NavLink to={'/contact'}>CONTACT US</NavLink></li>
                            <li><NavLink to={'/dashboard'}>DASHBOARD</NavLink></li>
                            <li><NavLink to={'/menu'}>OUR MENU</NavLink></li>
                            <li><NavLink to={'/shop'}>OUR SHOP</NavLink></li>
                            <li><NavLink to={'/cart'}>CART</NavLink></li>
                        </ul>
                        <a className='font-bold  ml-2'>Login</a>
                    </div>
                </div>
            </div>
        </Headroom>
    );
};

export default Navbar;