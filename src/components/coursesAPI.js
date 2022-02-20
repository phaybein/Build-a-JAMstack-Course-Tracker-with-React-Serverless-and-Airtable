import Axios from 'axios';

const api = Axios;

export const postCourse = data => api.post(
    `/.netlify/functions/courses`,
    { ...data },
).then( res => res.data );

export const updateCourse = data => api.put(
    `/.netlify/functions/courses`,
    { ...data, purchased: true },
).then( res => res.data );

export const deleteCourse = course => api.delete(
    `/.netlify/functions/courses`,
    {data: {id: course.id}},
).then( res => res.data );