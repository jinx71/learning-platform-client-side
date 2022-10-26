import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactCardSlider from 'react-card-slider-component';
import FeaturedCourseCard from '../FeaturedCourseCard/FeaturedCourseCard';
const FeaturedCourses = () => {
    const courses = useLoaderData();
    console.log(courses)

    return (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-5 mx-auto'>
            {
                courses.map(course => {
                    return <FeaturedCourseCard course={course}></FeaturedCourseCard>
                })
            }
        </div>
    );
};

export default FeaturedCourses;