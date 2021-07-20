'use strict';
const YXPH = require('../config/YeXiuPH')
const main = YXPH.router



main.get('/main', (req, res) => {
    console.log('Main Module Requested')
})

module.exports = main