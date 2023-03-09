const Product = require('../model/productModel');

const getAllProduct = async (req , res) => {
    try{
        const product = await Product.findAll();
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err);
    }
}

const getProductByProductId = async (req , res) => {
    try{
        const product = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports = {
    getAllProduct,
    getProductByProductId
}