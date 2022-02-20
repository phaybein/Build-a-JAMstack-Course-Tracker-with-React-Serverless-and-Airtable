import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import * as API from './coursesAPI';


export default function Course({ course }) {
    const queryClient = useQueryClient();
    // * UPDATE COURSE
	const { isLoading: courseIsLoading, mutate: updateCourse } = useMutation(API.updateCourse, {
		onSuccess: () => {
			queryClient.invalidateQueries('get-courses')
		}
	});

    // * DELETE COURSE
	const { isLoading: deleteIsLoading, mutate: deleteCourseMutation } = useMutation(API.deleteCourse, {
		onSuccess: () => {
			queryClient.invalidateQueries('get-courses')
		}
	});
    const markCoursePurchased = async () => { updateCourse(course) };

    const deleteCourse = async () => { deleteCourseMutation(course) };

    if(courseIsLoading) return 'Loading...'

    if(deleteIsLoading) return `Deleting, ${course.name}...`

    return (
        <div className="list-group-item">
            <a href={course.link}>
                <h4 className="list-group-item-heading">{course.name}</h4>
            </a>
            <p>
                Tags:{' '}
                {course.tags &&
                    course.tags.map((tag, index) => (
                        <span className="badge badge-primary mr-2" key={index}>
                            {tag}
                        </span>
                    ))}
            </p>
            {!course.purchased && (
                <button
                    className="btn btn-sm btn-primary"
                    onClick={markCoursePurchased}
                >
                    Purchased
                </button>
            )}
            <button
                className="btn btn-sm btn-danger ml-2"
                onClick={deleteCourse}
            >
                Delete
            </button>
        </div>
    );
}
