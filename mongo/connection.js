const mongoose = require('mongoose')

module.exports = mongoose.connect("mongodb://localhost:27017/studentsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to database')
}).catch(err => {
    console.log(err)
})