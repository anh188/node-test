const User = require("../models/User");

class UserService{
    create = async(dataUser) =>{
        try{
            //xy ly cac nghiep vu lien quan
            //goi den tang model
            const user = new User(dataUser);
            await user.save();

            return user;
        } catch (error){
            throw error;
        }
    }

    update = async (id, data) =>{
        try{
            const result = await User.updateOne({_id: id}, {username: data.username});
            return true
        } catch (error){
            throw error;
        }
    }


    delete = async (id, data) =>{
        try{
            const user = await User.findById(id);
            console.log(user);
            await user.deleteOne();

            return true
        } catch (error){
            throw error;
        }
    }

    // để viết được 1 hàm cần xđ:
    // hàm để làm gì?
    // có trả về data k? 
    // có tham số đầu vào không?
    getAll = async() =>{
        try{
            //goi den model
            // const users = await User.find({'username': 'phwnwnh'});
            const users = await User.find();
            return users;
        } catch (error){
            throw error;
        }
    }

}
module.exports = new UserService();