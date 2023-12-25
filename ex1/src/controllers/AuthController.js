const jwt = require('jsonwebtoken');
class AuthController {
    login = async (req, res, next) =>{
        try{
            //check username and password in database
            // nếu tồn tại user thì tạo token
            // nếu k tồn tại thì => trả về lỗi k tìm thấy user
            console.log('login')

            const {username} = req.body;
            const token = jwt.sign({username}, process.env.SECRET_KEY_JWT);


            res.status(200).json({
                token: token
            })
        } catch (error){
            throw error;
        }
    }

}
module.exports = new AuthController()