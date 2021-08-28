const router = require('express').Router();
const student = require('../mongo/model')

router.post('/', (req, res) => {
    const {
        societyName,
        className
    } = req.body;

    student.find({
        'society.societyName': societyName,
        class: {
            $in: className
        },
        year: {
            $lte: new Date().getFullYear() - 15
        }
    }).count().then(count => {
        if (count) {
            console.log(count)
            res.status(200).send(`Number of students that joined ${societyName}-society and are aged 15 and above from class ${className.map(calss=>{return calss})} are ${count}`)
        } else {
            res.status(200).send(`No students aged 15 and above have joined to ${societyName}-society from class ${className.map(classname=>className)}`)
        }
    }).catch(err => {
        console.log(err)
        res.status(500).send("There was an erro,Pleae try again later")
    })
})

module.exports = router