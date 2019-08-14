const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('index')
})

router.post('/create', (req, res) => {
    const fname = req.body['fname']
    const lname = req.body['lname']
    const designation = req.body['designation']
    const email = req.body['email']
  
    const mobile = req.body['mobile']

    res.render('signature', {
        fname,
        lname,

        designation,
        email,
        mobile
    })
})

module.exports = router
