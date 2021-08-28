const router = require('express').Router();

router.use('/register', require('./register'))
router.use('/showAll', require('./showAll'))
router.use('/updateSociety', require('./updateSociety'))
router.use('/numberOfStudentsToday', require('./societyJoined-today'))
router.use('/numberOfStudentsAgeAbove15', require('./societyJoined-ageLimit'))

module.exports = router;