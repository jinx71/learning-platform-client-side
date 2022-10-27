/*
 This is course summary page
*/


import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import FeaturedCourseCard from '../../Shared/FeaturedCourseCard/FeaturedCourseCard';

const Courses = () => {
    const [courseID, setCourseID] = useState(1);
    const courses = useLoaderData()
    const handleVerticalTab = (id) => {
        setCourseID(id)
    }
    return (

        < div className='container mx-auto grid grid-cols-6'>
            <div className="sideBar col-span-1 ">
                <ul className='mt-5'>
                    {
                        courses.map(course => <li className=''><button onClick={() => handleVerticalTab(course.CourseID)} className="btn  btn-primary rounded-full mb-5 w-full">{course.category}</button></li>)
                    }
                </ul>
            </div>
            <div className="courseCard col-span-5 my-5">
                {
                    courses.map(course => {
                        if (course.CourseID == courseID) {
                            // console.log(course)
                            return <FeaturedCourseCard course={course}></FeaturedCourseCard>
                        }

                        else {
                            return null
                        }
                    })
                }
            </div>
        </div >
    );
};

export default Courses;