const YXPH = require('./YeXiuPH')
const env = require('dotenv')

const DB1Info = {
    user: process.env.USER,
    password: process.env.PASS,
    server: process.env.SERVER,
    database: process.env.DB1,
    port: 1433,
    encrypt: process.env.SQL_ENCRYPT,
    trustServerCertificate: false // change to true for local dev / self-signed certs
};

const DB2Info = {
    user: process.env.USER,
    password: process.env.PASS,
    server: process.env.SERVER,
    database: process.env.DB2,
    port: 1433,
    encrypt: process.env.SQL_ENCRYPT,
    trustServerCertificate: false // change to true for local dev / self-signed certs
};

const DB3Info = {
    user: process.env.USER,
    password: process.env.PASS,
    server: process.env.SERVER,
    database: process.env.DB3,
    port: 1433,
    encrypt: process.env.SQL_ENCRYPT,
    trustServerCertificate: false // change to true for local dev / self-signed certs
};

const DB4Info = {
    user: process.env.USER,
    password: process.env.PASS,
    server: process.env.SERVER,
    database: process.env.DB4,
    port: 1433,
    encrypt: process.env.SQL_ENCRYPT,
    trustServerCertificate: false // change to true for local dev / self-signed certs
};

const DB5Info = {
    user: process.env.USER,
    password: process.env.PASS,
    server: process.env.SERVER,
    database: process.env.DB5,
    port: 1433,
    encrypt: process.env.SQL_ENCRYPT,
    trustServerCertificate: false // change to true for local dev / self-signed certs
};

module.exports = DBData = {
    DB1Info,
    DB2Info,
    DB3Info,
    DB4Info,
    DB5Info,
}