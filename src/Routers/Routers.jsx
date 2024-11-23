import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import MainRoute from '../Pages/MainRoute';
import Home from '../Pages/Home/Home';

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <MainRoute></MainRoute>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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