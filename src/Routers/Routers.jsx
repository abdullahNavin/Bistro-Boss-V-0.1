import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import MainRoute from '../Pages/MainRoute';
import Home from '../Pages/Home/Home';
import Menu from '../Pages/OurMenu/Menu';
import Shop from '../Pages/Shop/Shop';

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
                path:'menu',
                element:<Menu></Menu>
            },
            {
                path:'shop',
                element:<Shop></Shop>
            }
        ]
    }
],
    {
        future: {
            v7_startTransition: true
        }
    }
)

export default Routers;