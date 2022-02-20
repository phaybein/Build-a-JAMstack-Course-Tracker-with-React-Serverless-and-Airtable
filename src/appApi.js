import Axios from 'axios';


const api = Axios;

export const getCourses = () => api.get('/.netlify/functions/courses').then(res => res.data)