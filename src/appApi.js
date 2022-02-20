import Axios from 'axios';


const api = Axios;

export const getCourses = () => api.get('/api/courses').then(res => res.data)