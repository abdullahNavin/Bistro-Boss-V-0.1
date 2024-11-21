import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const Routers = createBrowserRouter([
    {
        path:'/',
        element:<div>Hello react</div>
    }
])

export default Routers;