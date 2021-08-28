const router = require('express').Router();
const student = require('../mongo/model');
const idCheck = require('../functions/idCheck')

router.put('/:studentID/:operation', (req, res) => {

    const {
        studentID,
        operation
    } = (req.params)
    const societyFeild = req.body.society;
    if (societyFeild && operation) {
        var operator;
        switch (operation) {
            case "add":
                operator = "$addToSet"
                break;
            case "remove":
                operator = "$pull"
                break;
            default:
                operator = "$operateError"
                break;
        }

        // update society code
        student.updateOne({
            _id: studentID
        }, {
            [operator]: {
                society: {
                    societyName: societyFeild,
                    dateJoined: new Date().toLocaleDateString()
                }
            }
        }).then((output) => {
            const {
                modifiedCount,
                matchedCount
            } = output
            if (modifiedCount && matchedCount) {
                res.status(200).send("Society updated successfully");
            } else if (matchedCount) {
                res.status(400).send("Society could not be updated,Please try again later")
            } else {
                res.status(400).send("Please make sure the ID enterd is correct")
            }
        }).catch(err => {
            console.log(err.message)
            res.status(500).send("There was an error, Please try again later")
        })
    } else {
        res.status(400).send("Value must not be empty")
    }
})

module.exports = router;