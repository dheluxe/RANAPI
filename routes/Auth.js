'use strict';
const YXPH = require('../config/YeXiuPH')
const auth = YXPH.router

auth.get('/auth', (req, res) => {
    console.log('Auth Data Requested')
})


module.exports = auth