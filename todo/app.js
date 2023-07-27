const express=require('express');
const bodyParser=require('body-parser');
const {getAllTodoList,createts,getTodoByID, deleteTodoByID, updated}=require('./controller/todo');
const cors=require('cors')
const {connectDb}=require('./config/db');
connectDb();

const app=new express();
app.use(cors())
app.use(bodyParser.json());
app.get('/todo/',getAllTodoList);
app.post('/todo/post/',createts)
app.get('/todo/:id',getTodoByID)
app.delete('/todo/delete/:id',deleteTodoByID)
console.log("***")
app.put('/todo/update/:id',updated)
app.listen(8000,()=>{
    console.log('Server is running!....')
})