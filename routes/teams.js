const express = require("express");
const router = express.Router();
const Team = require('../models/teams');

router.get('/', async(req, res) => { console.log("woeking")});

router.post('/create', async(req, res) => {
    const { name, city, coach } = req.body;
    const team = new Team({ name, city, coach });

    const response = await team.save();

    res.status(200).json(response);
});

module.exports = router;