const router = require('express').Router();
const student = require('../mongo/model')

router.post('/', (req, res) => {
    const {
        societyName,
        className
    } = req.body;
    student.find({
        'society.societyName': societyName,
        'society.dateJoined': new Date().toLocaleDateString(),
        class: {
            $in: className
        }
    }).count().then(count => {
        if (count) {
            res.status(200).send(`Number of students that joined ${societyName} today from class ${className.map(calss=>{return calss})} are ${count}`)
        } else {
            res.status(200).send(`No student joined ${societyName} from class ${className.map(classname => classname)}`)
        }
    }).catch(err => {
        console.log(err)
        res.status(400).send('There was an error,Please try again later')
    })
})

module.exports = router;