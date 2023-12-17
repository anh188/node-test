const Customer = require("../models/Customer");

class CustomerService{
    create = async(dataCustomer) =>{
        try{

            const customer = new Customer(dataCustomer);
            await customer.save();

            return customer;
        } catch(error){
            throw error;
        }
    }
    get = async() =>{
        try{
            const customers = await Customer.find();
            return customers;
        } catch(error){
            throw error;
        }
    }

    update = async(id, data) =>{
        try{
            const result = await Customer.updateOne({_id: id}, {username:data.username});
            return true
        } catch (error){
            throw error;
        }
    }

    delete = async (id, data) =>{
        try{

            const customer = await Customer.findById(id);
            console.log(customer);
            await customer.deleteOne();
            return true
        } catch(error){
            throw error;
        }
    }

}
module.exports = new CustomerService();