const {DataTypes} = require('sequelize');
const dbConnect = require('../config/dbConnect');

const Product = dbConnect.define('product_tb' , {
    productName: {
        type: DataTypes.STRING,
    },
    productPrice: {
        type: DataTypes.DOUBLE,
    },
    ProductQuantity: {
        type: DataTypes.INTEGER,
    },
    productOutOfOrder: {
        type: DataTypes.INTEGER,
    }
} , {
    freezeTableName: true
});

module.exports = Product;

(async () => {
    await dbConnect.sync();
});