const express = require("express");
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/', async(req, res) => {
    try {
         //res.status(200).json({msg: "This is JSON!"});
    const user = await User.find()
    //res.status(200).json(user)
    const response = await user.map(user => {
        return {
            _id: user._id,
            email: user.email
        }
    })
    res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
   
})

router.get('/:user', async(req, res) => {

  try {
      const user = await User.findById(req.params.fixtures);

      if(!user) {
          return res.status(404).json({
            message : "User not found!"
          })
        }
  
      res.status(200).json({
                            _id: user._id,
                            email: user.email
                          })
  
      return console.log(user);
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
    
        const user = await User.find({email});
        
        if (user.length >= 1) {
            return res.status(409).json({
              message: "Email already exists!"
            });
          } else {
           const result = new User({email, password: hash});
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

    const user = await User.find({email});
    if (user.length < 1) {
        return res.status(409).json({
          message: "Email does not exists!"
        });
      }else{

    bcrypt.compare(password, user[0].password, err => {
        //if (err){
        //  console.log(err)
        //  return res.status(401).json({
        //    message: 'Auth Failed'
        //  });
        //}
        if (user.length < 1) {
            return res.status(409).json({
              message: "Email does not exists!"
            });
          }
        
          const token = jwt.sign(
            { userId: admin._id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' });  

        console.log(user)
        res.status(200).json({
          userId: admin._id,
          token: token
        });
      })
    }

})

module.exports = router;