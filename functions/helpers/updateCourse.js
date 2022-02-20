const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    try {
        // TODO: update course
        const {id, ...fields} = JSON.parse(event.body);
        const updatedCourses = await table.update([{id, fields}]);
        return formattedReturn(200, updatedCourses);
        
    } catch (err) {
        console.error(err);
        const errMessage = err.message;
        return formattedReturn(500, {errMessage})
    }
};
