import React, { useEffect } from 'react'
import './Newitem.css'
import { useState } from 'react'


const Newitem=(props)=> {
    const{addItem,editState,editItem}=props
    const [title,setTitle]=useState('')
    const[priority,setPriority]=useState('')
    const isEdit=Boolean(editState._id)
    useEffect(()=>{
        if(editState._id){
            setTitle(editState.title)
            setPriority(editState.priority)
        }
    },[editState])


    const handleInputChange=(e)=>{
        setTitle(e.target.value)
    }
    
const handleSave=()=>{
    if(!title){
        return
    }
    const obj={
        title,
        priority
    }
    if(isEdit){
        obj.id=editState._id
        editItem(obj)
    }else{
    addItem(obj)}
    setPriority('')
    setTitle('')

}
const handleclear=()=>{
    setTitle('')
    setPriority('')
}

const PRIORITY=['high','medium','low']
  return (
    <div className='new-item-card'>
        <div className='checkbox'>
        </div>
        <div className='form-container'>
            <input placeholder='Type here'   onChange={handleInputChange} value={title}/>
            {title && (<div>
            <div className='badge-container'>
                {PRIORITY.map((p)=><div key={p} className={`p-badge ${p} ${p===priority && 'selected'}`} 
                onClick={()=>setPriority(p)}>{p}</div>)}
            </div>
            <div className='btn-container'>
                <button className='primary' onClick={handleSave}>Save</button>
                <button onClick={handleclear}>Clear</button>
            </div>
            </div>)}
        </div>
    </div>
  )
}

export default Newitem