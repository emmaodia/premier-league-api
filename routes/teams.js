const express = require("express");
const router = express.Router();
const Team = require('../models/teams');
const _ = require('lodash');
const redis_client = require('../redis').redis_client;

const checkTeamCache = require('../middleware/checkTeamCache');

router.get('/search', async(req, res) => {
    try {
        const teams = await Team.find();
        console.log(req.query)

        let response = [];

        if(typeof req.query.name != 'undefined' ){
            response = teams.filter( team => {
                if(team.name.toLowerCase() === req.query.name){
                    return response;
                }
            });
        }
        console.log(response)
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

router.get('/:team', checkTeamCache, async(req, res) => {

    try {
        const id  = req.params.team;
        console.log(id);
        const team = await Team.findById(id);

        if(!team) {
            return res.status(404).json({
              message : "Team not found!"
            })
          }
          console.log(team);
          
          redis_client.setex(id, 3600, JSON.stringify(team));
        res.status(200).json({
                                name: team.name,
                                city: team.city,
                                coach: team.coach,
        
                            })
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
   
})

router.get('/', async(req, res) => { 

    try {
        const team = await Team.find();

    const response = await team.map(team => {
        return {
            _id: team._id,
            name: team.name,
            city: team.city,
            coach: team.coach
        }
    })

    res.status(200).json(response);
    console.log(response)
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
});

router.post('/create', async(req, res) => {

    try {
        const { name, city, coach } = req.body;
    const team = new Team({ name, city, coach });

    const response = await team.save();

    res.status(200).json(response);
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
    
});

router.patch('/:team', async(req, res) => {

    try {
        const team = await Team.findOneAndUpdate({ _id: req.params.team }, req.body);

    res.status(200).json({
        name: team.name,
        city: team.city,
        coach: team.coach,

    })

    return console.log(team);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
    
})

router.delete('/:team', async(req, res) => {
    try {
        const id = req.params.team;

    const team = await Team.remove({ _id : id })
    
    res.status(200).json({ msg: "Team has been deleted!" })
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
    
})

// redis_client.on('connect', function() {
//     console.log('Redis client connected');
// });

// redis_client.on('error', function (err) {
//     console.log('Something went wrong ' + err);
// });

module.exports = router;