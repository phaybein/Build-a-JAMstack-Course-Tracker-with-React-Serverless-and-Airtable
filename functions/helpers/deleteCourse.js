const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    try {
        // TODO: delete course
        const {id} = JSON.parse(event.body);
        const deletedRecord = await table.destroy(id);
        return formattedReturn(200, deletedRecord);
        
    } catch (err) {
        console.error(err);
        const errMessage = err.message;
        return formattedReturn(500, {errMessage})
    }
};
