import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Component/Pages/Blog/Blog';
import Checkout from '../Component/Pages/Checkout/Checkout';
import CourseDetails from '../Component/Pages/CourseDetails/CourseDetails';
import Courses from '../Component/Pages/Courses/Courses';
import Home from '../Component/Pages/Home/Home';
import Login from '../Component/Pages/Login/Login';
import Signup from '../Component/Pages/Signup/Signup';
import PrivateRoute from '../Component/Shared/PrivateRoute/PrivateRoute';
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
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:3001/courses/${params.id}`)

            },
            {
                path: "/checkout/:id",
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3001/checkout/${params.id}`)

            },
            {
                path: "/faq",
                element: <div>This is faq</div>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: "*",
        element: <div>This is 404</div>
    },
])