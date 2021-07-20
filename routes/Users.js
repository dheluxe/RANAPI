'use strict';
const YXPH = require('../config/YeXiuPH')
const user = YXPH.router

user.get('/user', (req, res) => {
    console.log('User Module Requested')
})


module.exports = user