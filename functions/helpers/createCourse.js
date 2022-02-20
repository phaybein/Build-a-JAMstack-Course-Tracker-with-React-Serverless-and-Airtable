const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    try {
        // TODO: create course
        const fields = JSON.parse(event.body);
        const createdCourse = await table.create([{fields}]);
        return formattedReturn(200, createdCourse);
        
    } catch (err) {
        console.error(err);
        const errMessage = err.message;
        return formattedReturn(500, {errMessage})
    }
};
