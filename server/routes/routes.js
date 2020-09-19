const express = require('express')
const router = express.Router()
const db = require('../db')
const { Games } = db
const path = require('path')

router.get('/', async (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

router.get('/games', async (req, res, use) => {
    const games = await Games.findAll()
    res.send(games)
})

router.get('/games/:id', async (req, res, use) => {
    const game = await Games.findOne({
        where: {
            id: req.params.id
        }
    })
    res.send(game)
})

module.exports = router