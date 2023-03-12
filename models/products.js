
//Getting mongoose package
const mongoose = require('mongoose');

//defining the product schema
const ProductSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        trim: true

    },

    name: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        trim: true
    }
})
// model
const Products = mongoose.model("Products", ProductSchema);
module.exports = Products;