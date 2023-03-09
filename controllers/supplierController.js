const Supplier = require('../model/supplierModel');

const getAllSupplier = async (req , res) => {
    try{
        const supplier = await Supplier.findAll();
        res.status(200).json(supplier);
    }catch(err){
        res.status(500).json(err);
    }
}

const getAllSupplierBySupplierId = async (req , res) => {
    try{
        const supplier = await Supplier.findAll({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(supplier[0]);
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports = {
    getAllSupplier,
    getAllSupplierBySupplierId
}