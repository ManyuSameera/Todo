const mongoose=require('mongoose');
exports.connectDb=async()=>{
    try{
        const conn=await mongoose.connect('mongodb+srv://manyusameera:forgotpassword@cluster0.cesrzdx.mongodb.net/test');
        console.log('db is connected');
    }catch(error){
        console.log('error in db connection');
        console.log(error);
    }
}