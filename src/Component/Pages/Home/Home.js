import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedCourses from '../../Shared/FeaturesCourse/FeaturedCourses';
import Header from '../../Shared/Header/Header';

const Home = () => {

    return (
        <div className='container mx-auto'>
            <Header></Header>
            <div className="divider text-5xl uppercase">{`<Featured Courses />`}</div>
            <FeaturedCourses></FeaturedCourses>
        </div>
    );
};

export default Home;