import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import MainRoute from '../Pages/MainRoute';
import Home from '../Pages/Home/Home';
import Menu from '../Pages/OurMenu/Menu';
import Shop from '../Pages/Shop/Shop';
import Login from './Login';
import SignUp from './SignUp';
import PrivateRouter from './PrivateRouter';
import Dashboard from '../Pages/Dashboard/Dashboard';
import UserHome from '../Pages/Dashboard/UserDBoard/UserHome';
import MyCart from '../Pages/Dashboard/UserDBoard/MyCart';
import AdminHome from '../Pages/Dashboard/AdminDBoard/AdminHome';
import ManageItem from '../Pages/Dashboard/AdminDBoard/ManageItem';
import AddItem from '../Pages/Dashboard/AdminDBoard/AddItem';
import AllUsers from '../Pages/Dashboard/AdminDBoard/AllUsers';

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <MainRoute></MainRoute>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'shop',
                element: <PrivateRouter><Shop></Shop></PrivateRouter>
            },
            {
                path: 'Login',
                element: <Login></Login>
            },
            {
                path: 'SignUp',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
        children: [
            {
                path: '',
                element: <UserHome></UserHome>
            },
            {
                path: 'myCart',
                element: <MyCart></MyCart>
            },
            {
                path:'',
                element:<AdminHome></AdminHome>
            },
            {
                path:'manageItems',
                element:<ManageItem></ManageItem>
            },
            {
                path:'addItem',
                element:<AddItem></AddItem>
            },
            {
                path:'allUsers',
                element:<AllUsers></AllUsers>
            }
        ]
    }
])

export default Routers;