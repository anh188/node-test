const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect(
            'mongodb+srv://phwnwnh:phwnwnh@atlascluster.hrcclc9.mongodb.net/scb-api?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('Database - Connect successfully !!!');
    } catch (error){
        console.log('Database - connext failure');
    }
}

module.exports = {connect};