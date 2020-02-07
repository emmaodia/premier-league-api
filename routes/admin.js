const express = require("express");
const router = express.Router();
const Admin = require('../models/admin');

router.get('/', async(req, res) => {
    //res.status(200).json({msg: "This is JSON!"});
    const admin = await Admin.find()
    //res.status(200).json(admin)
    const response = await admin.map(admin => {
        return {
            _id: admin._id,
            email: admin.email
        }
    })
    res.status(200).json(response)
})

router.post('/create', async(req, res) => {
    const {email, password} = req.body;
    const admin = new Admin({email, password});

    const response = await admin.save();

    res.status(200).json(response)
})

module.exports = router;