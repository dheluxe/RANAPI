'use strict';
const YXPH = require('../config/YeXiuPH')
const main = YXPH.router
const DB = YXPH.sql
const DBConn = YXPH.dbconn



main.get('/main', (req, res) => {
    console.log('Main Module Requested')
})



module.exports = main