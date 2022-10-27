/*
 This is home page
*/


import React from 'react';
import FeaturedCourses from '../../Shared/FeaturesCourse/FeaturedCourses';
import Header from '../../Shared/Header/Header';
import HomeCTA from '../../Shared/HomeCTA/HomeCTA';

const Home = () => {

    return (
        <div className='container mx-auto'>
            <Header></Header>
            <div className="divider mt-10 text-5xl uppercase">{`<Featured Courses />`}</div>
            <FeaturedCourses></FeaturedCourses>
            <HomeCTA></HomeCTA>
        </div>
    );
};

export default Home;