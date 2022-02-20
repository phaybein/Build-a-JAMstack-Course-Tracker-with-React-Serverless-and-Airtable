import React, { useEffect, useState } from 'react';
import './App.css';
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';
import { useQuery } from 'react-query';

import * as API from './appApi';

function App() {
    const { isLoading: coursesIsLoading, data: courses, isError: coursesIsError, isFetching: coursesIsFetching } = useQuery('get-courses', API.getCourses);

    if(coursesIsLoading) return 'Loading...';

    if(coursesIsError) return 'Error...';
   
    return (
        <div className="container mt-5">
            <h1 className="mb-5 text-center">Course Tracker</h1>
            <CourseForm />
            <CourseList courses={courses} coursesIsLoading={coursesIsLoading} refreshCourses={coursesIsFetching} />
        </div>
    );
}

export default App;
