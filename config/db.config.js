require('dotenv').config();

module.exports = {
    HOST: "sql12.freesqldatabase.com",
    USER: "sql12713980",
    PASSWORD: "SESkTUEs5T",
    DB: "sql12713980",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
