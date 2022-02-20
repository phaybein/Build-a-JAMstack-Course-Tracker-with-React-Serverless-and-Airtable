import React, { useState } from 'react';
import Tags from './Tags';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import * as API from './coursesAPI';

export default function CourseForm() {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [tags, setTags] = useState([]);
    const [count, setCount] = useState(0);

    const resetForm = () => {
        setName('');
        setLink('');
        setCount(count + 1);
    };

	const queryClient = useQueryClient();

    const { isLoading: postIsLoading, mutate: postCourse, isError: postError } = useMutation(API.postCourse, {
        onSuccess: () => {
            queryClient.invalidateQueries('get-courses')
        }
    })
    const submitCourse = async (e) => {
        e.preventDefault();
        //TODO: Create the course
        const data = {
            name,
            link,
            tags,
        };
        postCourse(data);
        resetForm();
        // courseAdded();
    };

    if(postIsLoading) return 'Loading...';

    if(postError) return `Error: ${postError.message}`;

    return (
        <div className="card">
            <div className="card-header">Add a New Course</div>
            <div className="card-body">
                <form className="" onSubmit={submitCourse}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="link">Link</label>
                        <input
                            type="text"
                            name="link"
                            value={link}
                            className="form-control"
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <p>Tags</p>
                        <Tags tagsUpdated={setTags} key={count} />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
