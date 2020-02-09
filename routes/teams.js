const express = require("express");
const router = express.Router();
const Team = require('../models/teams');

router.get('/', async(req, res) => { 

    const team = await Team.find();

    const response = await team.map(team => {
        return {
            _id: team._id,
            name: team.name,
            city: team.city,
            coach: team.coach
        }
    })
    res.status(200).json(response)
    console.log(response)


});

router.post('/create', async(req, res) => {
    const { name, city, coach } = req.body;
    const team = new Team({ name, city, coach });

    const response = await team.save();

    res.status(200).json(response);
});

module.exports = router;