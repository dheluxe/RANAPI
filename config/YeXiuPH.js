const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const port = 3000

/* MSSQL Database Connection */
const sql = require('mssql');
var dbconn = require('./dbconfig');

module.exports = {
    express,
    app,
    bodyParser,
    port,
    router,
    sql,
    dbconn,
};