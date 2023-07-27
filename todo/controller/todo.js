const Todo=require('../model/todo');

exports.getAllTodoList=async(req,res)=>{
    try{
        const list=await Todo.find();
        return res.status(200).json({
            data:list,
            length:list.length
        })
    }catch(error){
        return res.status(500).json({
            msg:"interval error"
        })
    }
}

exports.createts=async(req,res)=>{
    try{
        const newTodo=await Todo.create(req.body);
        return res.status(201).json({data:newTodo})
        
    }catch(err){
        res.status(500).json({msg:'Internel Server error'})

    }
}

exports.getTodoByID=async(req,res)=>{
    try{
        const todo=await Todo.findById(req.params.id);
        if(todo){
            return res.status(200).json({
                data:todo
            })
        }else{
            return res.status(404).json({
                msg:'Todo not found'
        })
    }
    }catch(error){
        return res.status(500).json({
            msg:'Internal server error'
})
}
}

exports.deleteTodoByID=async(req,res)=>{
    try{
        const todo=await Todo.findById(req.params.id);
        if(todo){
            await Todo.findByIdAndDelete(req.params.id);
            return res.status(200).json({
                msg:'Deleted'
            })
        }else{
            return res.status(404).json({
                msg:'not found'
        })
    }
    }catch(error){
        return res.status(500).json({
            msg:'Internal server error'
})
}
}

exports.updated=async(req,res)=>{
    // console.log("***"+req.params.id)
    // console.log("&&"+req.body.title)
    try{
        //console.log("Chk 1")
        const todo=await Todo.findById(req.params.id);
       // console.log("Chk 2"+todo)
        if(todo){
            const {title, priority} = req.body
            await Todo.findByIdAndUpdate(req.params.id,{title, priority}); 
           // console.log("***"+req.params.id)
            return res.status(200).json({
                msg:'Updated'
            })
        }else{
            return res.status(404).json({
                msg:'not found'
        })
    }
    }catch(error){
        return res.status(500).json({
            msg:'Internal server error'
})
}
}