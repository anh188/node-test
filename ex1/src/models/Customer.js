// Thông tin khách hàng bao gồm: 
// Họ và tên, số điện thoại, email, địa chỉ, năm sinh, giới tính. 
// (Yêu cầu: Schema các trường thông tin phải đúng SchemaType 
// và đặt bằng tiếng anh)

const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    username:{type: String, required: true},
    phone:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    address:{type: String, required: true},
    birthdate:{type: String},
    gender:{type: String}
})

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;