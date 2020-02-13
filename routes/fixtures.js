const express = require("express");
const router = express.Router();
const Fixture = require('../models/fixtures');

router.get('/:fixtures/:slug', async(req, res) => {
    const fixtures = await Fixture.findById(req.params.fixtures);

        if(!fixtures) {
            return res.status(404).json({
              message : "Fixture not found!"
            })
          }
    
        res.status(200).json({
                                home: fixtures.home,
                                away: fixtures.away,
                                score: fixtures.score,
                                play: fixtures.play,
                            })
    
        return console.log(fixtures);
})

router.get('/:fixtures', async(req, res) => {

    try {
        const fixtures = await Fixture.findById(req.params.fixtures);

        if(!fixtures) {
            return res.status(404).json({
              message : "Fixture not found!"
            })
          }
    
        res.status(200).json({
                                home: fixtures.home,
                                away: fixtures.away,
                                score: fixtures.score,
                                play: fixtures.play,
                            })
    
        return console.log(fixtures);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
   
})

router.get('/', async(req, res) => { 

    try {
        const fixtures = await Fixture.find();

    const response = await fixtures.map(fixtures => {
        return {
            _id: fixtures._id,
            home: fixtures.home,
            away: fixtures.away,
            score: fixtures.score,
            play: fixtures.play,
            slug: fixtures.slug,
            request: {
                type: "GET",
                url: `http://localhost:3000/api/v1/fixtures/${fixtures._id}`,
                slugUrl: `http://localhost:3000/api/v1/fixtures/${fixtures._id}/${fixtures.slug}`,
              }
        }
    })
    res.status(200).json(response);
    console.log(response)
    console.log(response)
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
});

router.post('/create', async(req, res) => {

    try {
        const { home, away, score, play } = req.body;
        const fixtures = new Fixture({ home, away, score, play });

        const response = await fixtures.save();

        res.status(200).json(response);
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
    
});

router.patch('/:fixtures', async(req, res) => {

    try {
        const fixtures = await Fixture.findOneAndUpdate({ _id: req.params.fixtures }, req.body);

    res.status(200).json({
        home: fixtures.home,
        away: fixtures.away,
        score: fixtures.score,
        play: fixtures.play
    })

    return console.log(fixtures);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
    
})

router.delete('/:fixtures', async(req, res) => {
    try {
        const id = req.params.fixtures;

    const fixtures = await Fixture.remove({ _id : id })
    
    res.status(200).json({ msg: "Fixture has been deleted!" })
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
    
})

module.exports = router;