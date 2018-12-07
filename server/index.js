require('dotenv').config()
const express = require('express');
const massive = require('massive')
const controller = require('./controller')

const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()
app.use(express.json())

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('Connected to the db')
    app.listen(SERVER_PORT, () => console.log("Server is running on port :" + SERVER_PORT))
})

app.get('/api/home', controller.getHomes);
app.post('/api/home', controller.addHome)
app.delete('/api/home/:id', controller.removeHome)


