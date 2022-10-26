import React from 'react';
import banner from '../../../Asset/banner.png'
const Header = () => {
    return (
        <div className="hero flex flex-col-reverse lg:flex-row justify-around py-10 items-center">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} alt="" className="" />
                <div>
                    <h1 className="text-5xl font-bold">Complete your dream to be a Fullstack Developer</h1>
                    <p className="py-6">Learn any coding program in distance and for a reasonable fee. You don't have to struggle alone, you've got our assistance and help.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;