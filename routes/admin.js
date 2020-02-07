const express = require("express");
const router = express.Router();
const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');

router.get('/', async(req, res) => {
    try {
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
    } catch (error) {
        console.log(error)
    }
   
})

router.post('/signup', async(req, res) => {
    try {
        const {email, password} = req.body;
        const hash = bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({
                  error: err
                });
            }
        })
    
        const admin = await Admin.find({email});
        
        if (admin.length >= 1) {
            return res.status(409).json({
              message: "Email already exists!"
            });
          } else {
           const result = new Admin({email, password: hash});
           await result.save();

           console.log(result);
            res.status(200).json(result)
          }
       
    } catch (error) {
        console.log(error)
    }
   
})

module.exports = router;