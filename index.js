import express from 'express'
// const express = require('express') this is before to 14.50 node version
import bodyParser from 'body-parser'
// routes
import usersRoutes from './routes/users.js'

const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    res.send('Hello from HomePage')
})


app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))