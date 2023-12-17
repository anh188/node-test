const ProductService = require("../services/ProductService");

class ProductController{
    create = async(req, res, next) =>{
        try{
            const{name, manufacturer, year, quantity, price} = req.body;
            let data = {
                name, manufacturer, year, quantity, price
            }
            const product = await ProductService.create(data);

            res.status(200).json({
                product
            })
        } catch(error){
            throw error;
        }
    }
    get = async (req, res, next) =>{
        try{

            const products = await ProductService.get();
            res.status(200).json({
                products
            })
        } catch(error){
            throw error;
        }
    }

    update = async (req, res, next) =>{
        try{
            const{ name, manufacturer, year, quantity, price} = req.body;
            const {id} = req.params;

            let data = {
                name, manufacturer, year, quantity, price
            }
            const result = await ProductService.update(id, data);
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
            const result = await ProductService.delete(id);
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
module.exports = new ProductController;