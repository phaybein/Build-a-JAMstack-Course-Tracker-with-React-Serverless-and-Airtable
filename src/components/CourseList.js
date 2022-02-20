import React from 'react';
import Course from './Course';

export default function CourseList({ courses, refreshCourses, coursesIsLoading }) {
    return (
        <div>
            <h2 className="mt-5 mb-3">Backlog</h2>
            {refreshCourses && 'Re-Fetching...'}
            <div className="list-group">
                {
                    coursesIsLoading &&
                    (
                        'Loading...'
                    )
                }
                {
                    !coursesIsLoading &&
                    courses.filter((course) => !course.purchased)
                        .map((course) => (
                        <Course
                            course={course}
                            key={course.id}
                        />
                     ))
                }
            </div>
            <h2 className="mt-5 mb-3">Already Purchased</h2>
            {courses
                .filter((course) => course.purchased)
                .map((course) => (
                    <Course
                        course={course}
                        key={course.id}
                        refreshCourses={refreshCourses}
                    />
                ))}
        </div>
    );
}
