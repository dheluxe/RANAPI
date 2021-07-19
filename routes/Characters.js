'use strict';
const YXPH = require('../config/YeXiuPH')
const char = YXPH.router

char.get('/char', (req, res) => {
    res.send('Char Module')
    console.log('Char Module')
})

char.get('/char/data', (req, res) => {
    res.send('Char Data Module')
    console.log('Char Data Module')
})



module.exports = char