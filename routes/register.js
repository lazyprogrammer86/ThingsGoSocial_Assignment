const router = require('express').Router();
const student = require('../mongo/model')

router.post('/', (req, res) => {
    req.body.society.map((obj) => {
        obj.dateJoined = new Date().toLocaleDateString();
    })
    const registrationBody = new student({
        name: req.body.name,
        contact: req.body.contact,
        subjects: req.body.subjects,
        class: req.body.class,
        society: req.body.society,
        year: req.body.year
    });
    registrationBody.save().then((result) => {
        res.status(201).send('Student registed successfully with id ' + result._id)
    }).catch(err => {
        console.log(err)
        res.status(400).send(err.message)
    })
})

module.exports = router;