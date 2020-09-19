const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const routes = require('./routes/routes')
const { syncAndSeed } = require ('./db')

app.use(morgan('dev'))

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', routes)

const PORT = 3000

app.listen(PORT, async () => {
    await syncAndSeed()
    console.log(`Listening on Port: ${PORT}`)
})