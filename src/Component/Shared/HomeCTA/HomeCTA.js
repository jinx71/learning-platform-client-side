import React from 'react';

const HomeCTA = () => {
    return (
        // <div className="hero min-h-screen bg-base-200">
        //     <div className="hero-content text-center">
        //         <div className="max-w-md">
        //             <h1 className="text-5xl font-bold">SignUp Now!!!</h1>
        //             <p className="py-6">Grow Your Skill! Build an awesome career in digital world</p>
        //             <button className="btn btn-primary">Get Started</button>
        //         </div>
        //     </div>
        // </div>
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://img.freepik.com/free-vector/task-concept-illustration_114360-3578.jpg?w=740&t=st=1666815720~exp=1666816320~hmac=25f804b65cecaa6b8036fd50fe4a5f2fa52c5cb5d99ced6278d6005f70a37b35" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">SignUp Now!</h1>
                    <p className="py-6">Grow Your Skill! Build an awesome career in digital world</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomeCTA;