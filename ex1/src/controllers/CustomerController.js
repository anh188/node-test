const CustomerService = require("../services/CustomerService");

class CustomerController {
    create= async (req, res, next) =>{
        try{
            const {username, phone, email, address, birthdate, gender} = req.body;
            
            let data = {
                username, phone, email, address, birthdate, gender
            }
            const customer = await CustomerService.create(data);
            
            res.status(200).json({
                customer
            })
        }catch (error){
            throw error;
        }
    } 

    get = async (req, res, next) =>{
        try{

            const customers = await CustomerService.get();
            res.status(200).json({
                customers
            })
        } catch(error){
            throw error;
        }
    }

    update = async (req, res, next) =>{
        try{
            const{ username, phone, email, address, birthdate, gender} = req.body;
            const {id} = req.params;

            let data = {
                username, phone, email, address, birthdate, gender
            }
            const result = await CustomerService.update(id, data);
            if (result){
                res.status(200).json({'msg': 'Updated'})
            }
            else{
                throw new Error('update fail!!')
            }
        } catch(error){
            throw error;
        }
    }

    delete = async(req,res,next) =>{
        try{
            const{id} = req.params;
            const result = await CustomerService.delete(id);
            if(result){
                res.status(200).json({'msg':'Deleted'})
            }else{
                throw new Error('Delete fail!!')
            }
        } catch(error){
            throw error;
        }
    }

}

module.exports = new CustomerController;