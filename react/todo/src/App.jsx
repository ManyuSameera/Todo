import { useEffect, useState } from 'react'
import './App.css'
import Todolist from './components/TodoList/Todolist'
import Newitem from './components/newItems/Newitem'
//import { nanoid } from 'nanoid'
// import { Toast } from 'react-toastify/dist/components'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()


// const Default_list=[{
//   title:'Study Js',
//   priority:'high',
//   id:nanoid()
// },{

//   title:'Study Css',
//   priority:'low',
//   id:nanoid()
// },{
//   title:'Study React',
//   priority:'medium',
//   id:nanoid()
// }]


const App=()=> {
  const[list,setList]=useState([])
  const[editState,setEditState]=useState({})
  console.log(editState)
  console.log('===')
  useEffect(()=>
  {
    fetch("http://localhost:8000/todo").then((res)=>
    {
      res.json().then((json)=> {
        setList(json.data)
      console.log(json)
    })
    })},[editState])
    const deleteItem=(id)=>{
    //   fetch(`http://localhost:3000/todo/delete/${id}`,{
    //     method:'DELETE'}).then((res)=>{

      
    //     const filteredList=list.filter((item)=>item.id!==id)
    //     console.log(filteredList)
    //     setList([...filteredList])
    // })
    console.log(id)
    fetch('http://localhost:8000/todo/delete/'+id,{
      method:'DELETE',
    })
    .then(()=>{
      console.log('deleted');
    setEditState({})
    toast.info("deleted")
    })
    // toast.danger("Deleted")
    // toast.primary("Deleted")
  }

    const addItem=(item)=>{
      // item.id=nanoid()
      
      
      fetch("http://localhost:8000/todo/post",{
        method:'POST',
        headers:{
          'Accept':'application/json ,text/plain , */*',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(item)
      }).then((res)=>{
        res.json().then(setList((prev)=>[item,...prev]))
        .catch(()=>{console.log("error")})
        // setList((prev)=>[item, ...prev])
        toast.success("Added succesfully")
        // toast.danger("Deleted")
      })
      
      
  }


  const triggerEdit=(item)=>{
    setEditState(item)
    console.log(item)
  }
    
  const editItem=(updatedItem)=>
  {
    // const updatedList=list.map((item)=>item.id==updatedItem.id?updatedItem:item)
    // setList([...updatedList])
    console.log("ghg",updatedItem)
    fetch('http://localhost:8000/todo/update/'+updatedItem.id,
    {
      method:'PUT',
      headers:{
        'Accept':'application/json,text/plain,*/*',
        'Content-type':'application/json'
      },
      body:JSON.stringify(updatedItem)
      }).then(()=>{
        console.log("updated")
        setEditState({})
      }).catch((err)=> console.log(err))
      console.log(updatedItem)
       toast.info("Edited Successfully");
  }
  
  return(<div className='app'>

  <h1 className="title">Hello</h1>
  {/* <h5>World</h5> */}
  <Newitem addItem={addItem}  editState={editState} editItem={editItem}/>
  <Todolist list={list} deleteItem={deleteItem} triggerEdit={triggerEdit} />
  </div>
    
  )

}

export default App
