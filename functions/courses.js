const formattedReturn = require('./helpers/formattedReturn');
const getCourses = require('./helpers/getCourses');
const createCourse = require('./helpers/createCourse');
const deleteCourse = require('./helpers/deleteCourse');
const updateCourse = require('./helpers/updateCourse');
exports.handler = async (event) => {
    // TODO: call appropriate helper function based on HTTP method
    switch (event.httpMethod) {
        case 'GET':
            return await getCourses(event);
            break;
        case 'POST':
            return await createCourse(event);
            break;
        case 'PUT':
            return await updateCourse(event);
            break;
        case 'DELETE':
            return await deleteCourse(event);
            break;
    
        default:
            return formattedReturn(405, {});
            break;
    }
    return formattedReturn(200, 'Hello World');
};
