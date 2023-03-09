const {Sequelize} = require('sequelize');

const dbConnect = new Sequelize(
    'dti_stock_db',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = dbConnect;