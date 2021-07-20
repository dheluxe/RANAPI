'use strict';
const YXPH = require('../config/YeXiuPH')
const main = YXPH.router
const sql = require('mssql');
const DB = YXPH.sql
const DBConn = YXPH.dbconn

// Get Server Info From DB5 ( API Database )
main.get('/main', (req, res) => {
    DB.connect(DBConn.DB1Info, (err) => {
        if (err) {
            res.send(`Unable to connect to Database "${DBConn.Data1.database}"`)
            console.log(err)
            DB.close()
        } else {
            res.send('DB Connected');
            //code for sql request here.
        }

    })
})
main.get('/testapi', (req, res) => {

})



module.exports = main