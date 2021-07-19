'use strict';
const YXPH = require('../config/YeXiuPH')
const main = YXPH.router

main.get('/', (req, res) => {
    res.send('Main Module')
    //res.redirect('https://yxphstudios.tech')
})


module.exports = main