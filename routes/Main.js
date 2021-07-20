'use strict';
const YXPH = require('../config/YeXiuPH')
const main = YXPH.router
const DB = YXPH.sql
const DBConn = YXPH.dbconn

// Get Server Info From DB5 ( API Database )
main.get('/main', (req, res) => {
    DB.connect(DBConn.DB5Info, (err) => {
        if (err) {
            res.send(`Unable to connect to Database "${DBConn.DB5Info.database}"`)
            console.log(err)
        } else {
            res.send('DB Connected');
            //code for sql request here.
        }

    })

})

module.exports = main