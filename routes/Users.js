'use strict';
const YXPH = require('../config/YeXiuPH')
const user = YXPH.router

user.get('/user', (req, res) => {
    //res.send('User Module')
    //res.redirect('https://yxphstudios.tech')
})


module.exports = user