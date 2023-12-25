const productModel =require("../model/productModel")


const createProduct = async function(req,res){
    try {
        let data = req.body
        const product = await productModel.create(data);
        return res.status(201).send({ status: true, message: "product created succefully.", data: product })
    } 
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

const getAllProduct = async function(req,res){
    try {
        let data = req.query
        let { productName,price, ...rest } = data
        let searchObj = { isDeleted: false }
        if (Object.keys(rest).length > 0) return res.status(400).send({ status: false, message: `you can't filter on ${Object.keys(rest)} key` })
        if(productName) searchObj.productName =productName;
        if(price) searchObj.price=price;
        const product = await productModel.find(searchObj);
        if (product.length == 0) return res.status(404).send({ status: false, message: "No Product available" })
        return res.status(200).send({ status: true, message: "product fetch succefully.", data: product })
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

const getProductById = async function(req,res){
    try {
        let productId = req.params.id
        const product = await productModel.findOne({ _id: productId, isDeleted: false });
        if (!product) return res.status(404).send({ status: false, message: "productId invalid or the product is deleted" })
        return res.status(200).send({ status: true, message: "product fetch succefully.", data: product })
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

const updateProductById = async function(req,res){
    try {
        let productId = req.params.id
        let updatedData = req.body
      
        const product = await productModel.findOneAndUpdate({_id:productId,isDeleted: false},updatedData,{new:true});
        if (!product) return res.status(404).send({ status: false, message: "productId invalid or the product is deleted" })
        return res.status(200).send({ status: true, message: "product updated succefully.", data: product })
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

const deleteProductById = async function(req,res){
    try {
        let productId = req.params.id
      
        const product = await productModel.findByIdAndUpdate({ _id: productId }, { isDeleted: true, deletedAt: Date.now() });
        if (!product) return res.status(404).send({ status: false, message: "productId invalid or the product is deleted" })
        return res.status(200).send({ status: true, message: "product deleted succefully.", data: product })
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}



module.exports = { createProduct,getAllProduct,getProductById,updateProductById,deleteProductById}