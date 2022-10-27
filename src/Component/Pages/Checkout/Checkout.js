/*
 This is checkout page
*/


import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const enrolledCourse = useLoaderData();
    return (
        <div>
            <header>
                <div className="hero" style={{ backgroundImage: `url(${enrolledCourse.banner})`, height: '600px' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="text-center text-neutral-content">
                        <div className="w-1/2 p-16">
                            <h1 className="mb-5 text-5xl font-bold">Congratulations!, You have successfully enrolled in</h1>
                            <h1 className="mb-5 text-5xl font-bold">{enrolledCourse.courseTitle}</h1>
                            <h1 className="mb-5 text-5xl font-bold">Course</h1>




                        </div>
                    </div>

                </div>
            </header>
        </div>
    );
};

export default Checkout;