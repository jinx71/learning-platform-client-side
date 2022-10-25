import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Component/Pages/Home/Home';
import Main from '../Layout/Main';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/courses",
                element: <div>This is course</div>
            },
            {
                path: "/courses/:id",
                element: <div>This is course 01</div>
            },
            {
                path: "/faq",
                element: <div>This is faq</div>
            },
            {
                path: "/blog",
                element: <div>This is blog</div>
            },
            {
                path: "/login",
                element: <div>This is login</div>
            },
            {
                path: "/signup",
                element: <div>This is signup</div>
            },
        ]
    },
    {
        path: "*",
        element: <div>This is 404</div>
    },
])