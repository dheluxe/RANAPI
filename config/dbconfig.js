const YXPH = require('./YeXiuPH')

exports.dbconfig = function () {
    var DB = {
        user: YXPH.ENVData.USER, // SQL Server Login
        password: YXPH.ENVData.PASS, // SQL Server Password
        server: YXPH.ENVData.SERVER, // SQL Server Server name
        DB1: YXPH.ENVData.DB1, // RanGame1 or RanGameS1
        DB2: YXPH.ENVData.DB2, // RanLog Database
        DB3: YXPH.ENVData.DB3, // RanShop Database
        DB4: YXPH.ENVData.DB4, // RanUser Database
        DB5: YXPH.ENVData.DB5, // API Database
    };
    return DB;
};