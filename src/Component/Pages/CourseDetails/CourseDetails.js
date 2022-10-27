import React, { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import ReactToPdf from 'react-to-pdf'
const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course)
    const ref = createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [8.5, 14]
    };
    return (

        <div className=''>
            <header>
                <div className="hero" style={{ backgroundImage: `url(${course.banner})`, height: '400px' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className=" text-neutral-content">
                        <div className="w-1/2 p-16">
                            <h1 className="mb-5 text-5xl font-bold">{course.courseTitle}</h1>
                            <p className="mb-5">{course.category}</p>

                            <ReactToPdf targetRef={ref} options={options} filename={course.courseTitle + `.pdf`}>
                                {({ toPdf }) => (
                                    <button className='btn btn-primary' onClick={toPdf}>Download Course Details</button>
                                )}
                            </ReactToPdf>


                        </div>
                    </div>

                </div>
            </header>
            <div className="divider my-10 text-5xl uppercase">{`<Course Details />`}</div>
            <div className='flex flex-col justify-center items-center'>
                <div ref={ref}>
                    <section className='container mx-auto my-5'>
                        <h2 className="text-4xl mb-10 underline uppercase">Course Description</h2>

                        <p>    {course.Description}</p>

                    </section>
                    <div className='container mx-auto grid grid-cols-1 md: grid-cols-2'>
                        <section className='container mx-auto'>
                            <h2 className="text-4xl mb-10 underline uppercase">What you will learn?</h2>
                            <ul className='list-disc'>
                                {course.ShortDescription.map(a => <li className='mb-3 list-inside'>{a}</li>)}
                            </ul>
                        </section>
                        <section className='container mx-auto'>
                            <h2 className="text-4xl mb-10 underline uppercase">This course includes</h2>
                            <ul className='list-disc'>
                                {course.CourseFeatures.map(a => <li className='mb-3 list-inside'>{a}</li>)}
                            </ul>
                        </section>
                        <section className='container mx-auto'>
                            <h2 className="text-4xl mb-10 underline uppercase">Course Short Syllabus</h2>
                            <ul className='list-disc'>
                                {course.Syllabus.map(a => <li className='mb-3 list-inside'>{a}</li>)}
                            </ul>
                        </section>
                        <section className='container mx-auto'>
                            <h2 className="text-4xl mb-10 underline uppercase">Course Requirement</h2>
                            <ul className='list-disc'>
                                {course.Requirement.map(a => <li className='mb-3 list-inside'>{a}</li>)}
                            </ul>
                        </section>
                    </div>
                </div>
                <Link to={`/checkout/${course.CourseID}`} className='btn btn-primary text-center mx-auto my-10'>Get Premium Access</Link>

            </div>
        </div>
    );
};

export default CourseDetails;