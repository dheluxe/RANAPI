const YXPH = require('./YeXiuPH')
const env = require('dotenv')

const DB1Info = {
    "user": process.env.USER,
    "password": process.env.PASS,
    "server": process.env.SERVER,
    "database": process.env.DB1,
    "port": process.env.SERVERPORT,
    "encrypt": process.env.SQL_ENCRYPT,
};

const DB2Info = {
    "user": process.env.USER,
    "password": process.env.PASS,
    "server": process.env.SERVER,
    "database": process.env.DB2,
    "port": process.env.SERVERPORT,
    "encrypt": process.env.SQL_ENCRYPT,
};

const DB3Info = {
    "user": process.env.USER,
    "password": process.env.PASS,
    "server": process.env.SERVER,
    "database": process.env.DB3,
    "port": process.env.SERVERPORT,
    "encrypt": process.env.SQL_ENCRYPT,
};

const DB4Info = {
    "user": process.env.USER,
    "password": process.env.PASS,
    "server": process.env.SERVER,
    "database": process.env.DB4,
    "port": process.env.SERVERPORT,
    "encrypt": process.env.SQL_ENCRYPT,
};

const DB5Info = {
    "user": process.env.USER,
    "password": process.env.PASS,
    "server": process.env.SERVER,
    "database": process.env.DB5,
    "port": process.env.SERVERPORT,
    encrypt: process.env.SQL_ENCRYPT,
};

module.exports = DBData = {
    DB1Info,
    DB2Info,
    DB3Info,
    DB4Info,
    DB5Info,
}