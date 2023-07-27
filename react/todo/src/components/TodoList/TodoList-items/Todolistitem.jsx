import "./Todolistitem.css"
import { useState } from "react"




const TodoListitem=(props)=>{
    const { item,onEdit, onDelete , index } =props
    const{title,priority,_id}=item




const [isChecked,setChecked]=useState(false)

    return(

        <div className={`item-card ${priority}`}>
            {isChecked? (
            <span className="material-symbols-outlined pointer" onClick={()=>setChecked(false)}>
            select_check_box
            </span>):(<span className="checkbox pointer" onClick={()=>setChecked(true)}/>)
        }
            
            {/* <div className="card-title">
            {title}</div> */}
            <div className={`card-title ${isChecked?'strike':''}`}>{title}</div>
            <div className="badge">{priority}</div>
            {/* <div className="edit">{</div> */}
            {/* <span class="material-edit-outlined"></span> */}
            <span className="material-symbols-outlined pointer" onClick={()=>onEdit(item)}>
    edit
</span>
<span className="material-symbols-outlined pointer" onClick={()=>onDelete(_id)}>
delete
</span>
        </div>
        
    )
}
export default TodoListitem