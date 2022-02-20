import Axios from 'axios';

const api = Axios;

export const postCourse = data => api.post(
    `/api/courses`,
    { ...data },
).then( res => res.data );

export const updateCourse = data => api.put(
    `/api/courses`,
    { ...data, purchased: true },
).then( res => res.data );

export const deleteCourse = course => api.delete(
    `/api/courses`,
    {data: {id: course.id}},
).then( res => res.data );