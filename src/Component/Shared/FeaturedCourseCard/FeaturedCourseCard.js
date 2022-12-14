import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
const FeaturedCourseCard = ({ course }) => {
    // console.log(course.courseTitle)
    const location = useLocation()
    console.log(location)
    const { courseTitle, category, price, language, reviews, thumbnail } = course
    return (
        <div className="card w-96 mx-auto border border-gray-300 dark:border-gray-800 shadow-xl">
            <figure><img src={thumbnail} alt="" style={{ width: '100%', height: '300px' }} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {courseTitle}
                    <div className="badge badge-secondary">{reviews?.average} <FaStar /></div>
                </h2>
                <p>{category}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{price} USD</div>
                    <div className="badge badge-outline">{language}</div>
                </div>
                {
                    location.pathname === '/home' ? <Link to={`/checkout/${course.CourseID}`} className="btn btn-primary">Buy Now</Link> : <Link to={`/courses/${course.CourseID}`} className="btn btn-primary">View Details</Link>
                }
            </div>
        </div>
    );
};

export default FeaturedCourseCard;