const YXPH = require('./YeXiuPH')
const env = require('dotenv')

const DB1Info = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB1,
    server: 'localhost',
    port: 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
    }
}

const DB2Info = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB2,
    server: 'localhost',
    port: 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
    }
}

const DB3Info = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB3,
    server: 'localhost',
    port: 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
    }
}

const DB4Info = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB4,
    server: 'localhost',
    port: 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
    }
}

const DB5Info = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB5,
    server: 'localhost',
    port: 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
    }
}

module.exports = DBData = {
    DB1Info,
    DB2Info,
    DB3Info,
    DB4Info,
    DB5Info
}