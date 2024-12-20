import React, { useContext } from 'react';
import Headroom from 'react-headroom';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';
import { BsCart4 } from "react-icons/bs";
import { Badge, Space } from 'antd';
import useCartData from '../../Hook/useCartData';

const Navbar = () => {
    const { user } = useContext(AuthContext)
    const { data } = useCartData()
    const handleLogOut = () => {
        signOut(auth)
            .then(res => {

            })
    }
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
                            <li>
                                <Link to={'/dashboard/myCart'}>
                                    <Space size={'middle'}>
                                        <Badge count={data.length}>
                                            <BsCart4 className='text-white text-2xl' />
                                        </Badge>
                                    </Space>
                                </Link>
                            </li>
                        </ul>
                        {
                            user ?
                                <Link onClick={handleLogOut} className='font-semibold uppercase ml-2'>Logout</Link>
                                :
                                <Link className='font-semibold uppercase ml-2' to={'/Login'}>Login</Link>
                        }
                    </div>
                </div>
            </div>
        </Headroom>
    );
};

export default Navbar;