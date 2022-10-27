/*
 This is blog page
*/

import React from 'react';
const Blog = () => {
    return (
        <div className='container'>
            <div className='border w-1/2 mx-auto'>
                <h1 className='text-2xl'>what is cors?</h1>
                <p class="font-bold">Answer</p>
                <p>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. </p>
            </div>
            <div className='border w-1/2 mx-auto'>
                <h1 className='text-2xl'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p class="font-bold">Answer</p>
                <p>I am using firebase for authentication & hosting purpose</p>
                <p>There are several other options for authentication purpose. Like OCTA</p>
            </div>
            <div className='border w-1/2 mx-auto'>
                <h1 className='text-2xl'>How does the private route work?</h1>
                <p className='font-bold'>Answer</p>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            <div className='border w-1/2 mx-auto'>
                <h1 className='text-2xl'>What is Node? How does Node work?</h1>
                <p className='font-bold'>Answer</p>
                <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
            </div>
        </div >
    );
};

export default Blog;