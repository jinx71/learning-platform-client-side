import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Courses from '../Component/Pages/Courses/Courses';
import Home from '../Component/Pages/Home/Home';
import Main from '../Layout/Main';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        // loader: ({ params }) => fetch('http://localhost:3001'),
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ({ params }) => fetch('http://localhost:3001')
            },
            {
                path: "/home",
                element: <Home></Home>,
                loader: ({ params }) => fetch('http://localhost:3001')
            },
            {
                path: "/courses",
                element: <Courses></Courses>,
                loader: ({ params }) => fetch('http://localhost:3001')
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