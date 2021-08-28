const mongoose = require('mongoose')
require('./connection');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Student Name is required']
    },
    contact: {
        type: String,
        required: [true, 'Student contact is required']
    },
    class: {
        type: [String],
            required: [true, 'Student must belong to some class']
    },
    society: [{
        societyName: {
            type: String,
            required: [true, 'societyName is required']
        },
        dateJoined: {
            type: String,
            required: true
        },
        _id: false
    }],
    year: {
        type: Number,
        required: [true, 'Student must belong to some year group'],
        min: [1970, "Student of year greater than 2010 is allowed to be registerd"],
        max: [Number(new Date().getFullYear()), "Student can not be from the future"]
    }
})
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;