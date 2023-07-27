const mongoose=require('mongoose');


const TodoSchema =new mongoose.Schema({
    title:String,
    priority:String,
    id:Number
})

module.exports=mongoose.model('Todo',TodoSchema);