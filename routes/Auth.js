'use strict';
const YXPH = require('../config/YeXiuPH')
const auth = YXPH.router

auth.get('/auth', (req, res) => {
    //res.send('User Module')
    //res.redirect('https://yxphstudios.tech')
})


module.exports = auth