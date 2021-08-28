const router = require('express').Router();
const student = require('../mongo/model');
const idCheck = require('../functions/idCheck')

router.get('/', (req, res) => {
    student.find().then((output) => {
        if (output.length) {
            res.status(200).send(output)
        } else {
            res.status(404).send('No student records found')
        }
    }).catch(err => {
        console.log(err)
        res.status(500).send("There was an error, please try again later")
    })
})

router.get('/:studentID', (req, res) => {
    const studentID = idCheck(req.params.studentID)
    student.findById(studentID).then(output => {
        if (output) {
            res.status(200).send(output)
        } else {
            res.status(404).send("No student records found with that ID")
        }
    }).catch(err => {
        res.status(500).send("There was an error, Please try again later")
    })
})
module.exports = router;