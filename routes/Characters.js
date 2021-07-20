'use strict';
const YXPH = require('../config/YeXiuPH')
const char = YXPH.router

char.get('/char', (req, res) => {
    console.log('Char Module Requested')
})

char.get('/char/data', (req, res) => {
    console.log('Char Data Module Requested')
})



module.exports = char