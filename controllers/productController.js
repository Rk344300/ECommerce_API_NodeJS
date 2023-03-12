const Products = require('../models/products');

// this help us to get  all the product
module.exports.getProducts = async function (req, res) {
    try {
        let products = await Products.find({})
        if (products.length < 1) {
            res.status(200).json({ msg: 'No Product' })
            return;
        }
        if (products) {
            res.status(200).json({ data: products })
        }
    } catch (error) {
        res.status(404).json({ msg: "error in finding  products" })
    }
}

//this is used to create a new product
module.exports.createProduct = async function (req, res) {
    try {
        const Product = await Products.create({
            id: req.body.id,
            name: req.body.name,
            quantity: req.body.quantity
        })


        res.status(201).json({ data: { Product } })
    } catch (error) {

        res.status(400).json({ data: { message: "error in creating Product" } })
    }
}
// delete the product
module.exports.deleteProduct = async function (req, res) {

    try {
        const { id: product_id } = req.params
        const deletedProduct = await Products.findByIdAndDelete({ _id: product_id });
        if (!deletedProduct) {
            return;
        }
        // console.log(deletedProduct);
        res.status(200).send({ data: { message: "deleted" } })

    } catch (error) {

        res.status(400).send({ data: { message: "error in deleting the product" } })
    }
}
//update the quantity of the product
module.exports.updateQuantity = async function (req, res) {
    try {
        const { id: product_id } = req.params;
        const { number } = req.query;

        if (!number) {
            res.status(400).json({ data: { msg: "error in updating qty " } })
            return;
        }
        const prd = await Products.findById(product_id)
        console.log("prd", prd);

        const newQty = prd.quantity + (+number);
        console.log(newQty);

        if (newQty > 0) {
            const Updatedprd = await Products.findOneAndUpdate(
                { _id: product_id },
                { quantity: newQty }, {
                new: true,
                runValidators: true
            }

            )
            console.log(Updatedprd);
            res.status(200).json({
                data: {
                    Updatedprd,
                    msg: "updated successfully"
                }
            })
        } else {
            res.status(400).json({
                data: { msg: "Qty cannot be zero " }
            })
            return;
        }
    }
    catch (error) {
        res.status(400).json({
            data: {
                msg: "error in updating"
            }
        })
    }
}