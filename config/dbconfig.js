const YXPH = require('./YeXiuPH')


exports.DB1Connect = function () {
    var DB1Data = {
        user: YXPH.ENVData.USER,
        password: YXPH.ENVData.PASS,
        server: YXPH.ENVData.SERVER,
        database: YXPH.ENVData.DB1,
    };
    return DB1Data;
};

exports.DB2Connect = function () {
    var DB2Data = {
        user: YXPH.ENVData.USER,
        password: YXPH.ENVData.PASS,
        server: YXPH.ENVData.SERVER,
        database: YXPH.ENVData.DB2,
    };
    return DB2Data;
};