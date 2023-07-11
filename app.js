const express = require('express')
const logger = require('./logger')
const app = express()
app.use(logger)
app.get('/', (req, res)=>{
    res.send('Home')
})
app.get('/about', (req, res)=>{
    res.send('about')
})
app.listen(3000, ()=>{
    console.log('server listening on port 3000');
})