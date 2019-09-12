const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('index')
})

router.post('/create', (req, res) => {
    const fname = req.body['fname']
    const fname1 = req.body['fname1']
    const designation = req.body['designation']
    const email = req.body['email']
    const mobile = req.body['mobile']



    res.render('signature', {
        fname,
        fname1,
        designation,
        mobile
    })
})

module.exports = router