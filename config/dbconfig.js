const YXPH = require('./YeXiuPH')

// Use this if api is being run directly at the same server.
var DB = {
    user: YXPH.ENVData.USER,
    password: YXPH.ENVData.PASS,
    server: YXPH.ENVData.SERVER,
    DB1: YXPH.ENVData.DB1,
    DB2: YXPH.ENVData.DB2,
    DB3: YXPH.ENVData.DB3,
    DB4: YXPH.ENVData.DB4,
    DB5: YXPH.ENVData.DB5,
};

// Use this if api and game host is different servers.
var DBIP = {
    user: YXPH.ENVData.USER,
    password: YXPH.ENVData.PASS,
    server: YXPH.ENVData.SERVER,
    port: YXPH.ENVData.SERVERPORT,
    DB1: YXPH.ENVData.DB1,
    DB2: YXPH.ENVData.DB2,
    DB3: YXPH.ENVData.DB3,
    DB4: YXPH.ENVData.DB4,
    DB5: YXPH.ENVData.DB5,
};


module.exports = dbConfig = {
    DBIP,
    DB
}