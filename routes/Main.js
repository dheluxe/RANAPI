'use strict';
const YXPH = require('../config/YeXiuPH')
const main = YXPH.router
const DB = YXPH.sql
const DBConn = YXPH.dbconn

main.get('/main', (req, res) => {
    //res.send('Main Module')
    //res.redirect('https://yxphstudios.tech')
})

module.exports = main