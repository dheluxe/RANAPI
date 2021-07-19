const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const env = require('dotenv')
const ENVData = process.env

const port = process.env.PORT


/* MSSQL Database Connection */
const sql = require('mssql')
var dbconn = require('./dbconfig')

module.exports = {
    express,
    app,
    bodyParser,
    port,
    router,
    sql,
    dbconn,
    ENVData,
};