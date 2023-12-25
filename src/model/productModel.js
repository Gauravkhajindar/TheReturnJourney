const mongoose = require("mongoose")
// let ObjectID =mongoose.Schema.Types.ObjectId

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    deletedAt: { type: Date },
    isDeleted: { type: Boolean, default: false }


},{timestamps:true})

module.exports = mongoose.model('product',productSchema)