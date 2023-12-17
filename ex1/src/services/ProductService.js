const Product = require("../models/Product");

class ProductService{
    create = async(dataProduct) =>{
        try{
            const product = new Product(dataProduct);
            await product.save();

            return product;
        } catch(error){
            throw error;
        }
    }
    get = async() =>{
        try{
            const products = await Product.find();
            return products;
        } catch(error){
            throw error;
        }
    }

    update = async(id, data) =>{
        try{
            const result = await Product.updateOne({_id: id}, {name:data.name});
            return true
        } catch (error){
            throw error;
        }
    }

    delete = async (id, data) =>{
        try{

            const product = await Product.findById(id);
            console.log(product);
            await product.deleteOne();
            return true
        } catch(error){
            throw error;
        }
    }
}

module.exports = new ProductService();