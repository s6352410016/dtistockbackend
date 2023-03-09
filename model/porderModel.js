const {DataTypes} = require('sequelize');
const dbConnect = require('../config/dbConnect');

const Porder = dbConnect.define("supplier_tb", {
    porderPriceTotal: {
    type: DataTypes.DOUBLE,
  },
  supplierId: {
    type: DataTypes.INTEGER,
  }
});

module.exports = Porder;

(async () => {
  await dbConnect.sync();
})();
