'use strict';
const YXPH = require('../config/YeXiuPH')
const char = YXPH.router

char.get('/char', (req, res) => {
    res.send('Character Module')
    //res.redirect('https://yxphstudios.tech')
})


module.exports = char