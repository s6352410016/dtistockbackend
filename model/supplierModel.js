const {Sequelize} = require('sequelize');
const dbConnect = require('../config/dbConnect');

const {DataTypes} = Sequelize;

const Supplier = dbConnect.define("supplier_tb", {
  supplierName: {
    type: DataTypes.STRING,
  },
  supplierContact: {
    type: DataTypes.STRING,
  },
  supplierAddress: {
    type: DataTypes.STRING,
  },
  supplierPhone: {
    type: DataTypes.STRING,
  }
} , {
  freezeTableName :true
});

module.exports = Supplier;

(async () => {
  await dbConnect.sync();
})();