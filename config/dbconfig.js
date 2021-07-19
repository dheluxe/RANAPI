const YXPH = require('./YeXiuPH')

exports.dbconfig = function () {
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
    return DB;
};