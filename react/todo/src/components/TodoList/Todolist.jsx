import TodoListitem from "./TodoList-items/Todolistitem"
import { useState } from "react"




const Todolist=(props)=>{
    const {list,deleteItem,triggerEdit}=props
    
    if(list.length<=0){
        return(
            // <div className="empty">
                <center>NO ITEMS TO DISPLAY</center>
            // </div>
        )
    }
    return (
        <>{list.map((item , index)=>(<TodoListitem key={index} item={item} onDelete={deleteItem} index={index} onEdit={triggerEdit}/>))}
        {/* <TodoListitem/> */}
        </>
    )
}

export default Todolist



