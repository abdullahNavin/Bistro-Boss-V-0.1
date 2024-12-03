import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaListAlt, FaMendeley, FaUserAlt } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { GiForkKnifeSpoon } from "react-icons/gi";

const Dashboard = () => {
    // TODO: change it
    const isAdmin = true
    return (
        <div className="h-svh w-svw flex">
            <div className="h-full bg-[#d1a054] w-[20%] p-5">
                <div className="mt-5">
                    <h1 className="text-3xl font-semibold uppercase">Bistro Boss</h1>
                    <p className="tracking-[8px] text-xl">Resturent</p>
                </div>
                <div className="mt-10">
                    <ul className="flex flex-col gap-6 dashboard">
                        {
                            isAdmin ?
                                <>
                                    <li><NavLink to={'/dashboard'} end className={({ isActive }) => isActive ? 'flex items-center gap-2 text-xl font-semibold text-white' : 'flex items-center gap-2 text-xl font-semibold'}><FaHome /> Admin Home</NavLink></li>
                                    <li><NavLink to={'/dashboard/manageItems'} className={({ isActive }) => isActive ? 'flex items-center gap-2 text-xl font-semibold text-white' : 'flex items-center gap-2 text-xl font-semibold'}><FaListAlt /> Manage Items</NavLink></li>
                                    <li><NavLink to={'/dashboard/addItem'} className={({ isActive }) => isActive ? 'flex items-center gap-2 text-xl font-semibold text-white' : 'flex items-center gap-2 text-xl font-semibold'}><GiForkKnifeSpoon /> Add Item</NavLink></li>
                                    <li><NavLink to={'/dashboard/allUsers'} className={({ isActive }) => isActive ? 'flex items-center gap-2 text-xl font-semibold text-white' : 'flex items-center gap-2 text-xl font-semibold'}><FaUserAlt /> Manage All Users</NavLink></li>

                                </>
                                :
                                <>
                                    <li><NavLink to={'/dashboard'} end className={({ isActive }) => isActive ? 'flex items-center gap-2 text-xl font-semibold text-white' : 'flex items-center gap-2 text-xl font-semibold'}><FaHome /> User Home</NavLink></li>
                                    <li><NavLink to={'/dashboard/payHistory'} className={({ isActive }) => isActive ? 'flex items-center gap-2 text-xl font-semibold text-white' : 'flex items-center gap-2 text-xl font-semibold'}><GiWallet /> Payment History</NavLink></li>
                                    <li><NavLink to={'/dashboard/myCart'} className={({ isActive }) => isActive ? 'flex items-center gap-2 text-xl font-semibold text-white' : 'flex items-center gap-2 text-xl font-semibold'}><BsCart4 /> My Cart</NavLink></li>
                                </>
                        }
                        {/* common route */}
                        <div className="divider"></div>
                        <li><NavLink to={'/'} className={'flex items-center gap-2 text-xl font-semibold'}><FaHome /> Home</NavLink></li>
                        <li><NavLink to={'/menu'} className={'flex items-center gap-2 text-xl font-semibold'}><FaMendeley /> Menu</NavLink></li>
                        <li><NavLink to={'/shop'} className={'flex items-center gap-2 text-xl font-semibold'}><BsCart4 /> Shop</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="h-full bg-white w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;