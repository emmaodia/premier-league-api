const express = require("express");
const router = express.Router();
const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

router.get('/', auth, async(req, res) => {
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

router.get('/:admin', auth, async(req, res) => {

  try {
      const admin = await Admin.findById(req.params.admin);

      if(!admin) {
          return res.status(404).json({
            message : "Admin account not found!"
          })
        }
  
      res.status(200).json({
                            _id: admin._id,
                            email: admin.email
                          })
  
      return console.log(admin);
  } catch (error) {
      console.log(error)
      res.status(500).json(error);
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

router.post('/login', async(req, res) => {
    const {email, password} = req.body

    const admin = await Admin.find({email});
    if (admin.length < 1) {
        return res.status(409).json({
          message: "Email does not exists!"
        });
      }else{

    bcrypt.compare(password, admin[0].password, err => {
  
        const token = jwt.sign(
            { userId: admin._id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' });  

        console.log(admin)
        res.status(200).json({
          userId: admin._id,
          token: token
        });
      })
    }
})

module.exports = router;