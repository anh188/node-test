// Thông tin sản phẩm bao gồm: 
// Tên sản phẩm, nhà sản xuất, năm sản xuất, số lượng, giá bán. 
// (Yêu cầu: Schema các trường thông tin phải đúng SchemaType 
// và đặt bằng tiếng anh)

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{type: String, required: true},
    manufacturer:{type: String, required: true},
    year: {type: Number, required:true},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true}
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;