import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux'
import { setTodos, deleteTodo, editTodo } from './redux/actions/userAction'
import {Modal, Button} from 'react-bootstrap'


function App() {
  const [todo, setTodo] = useState("")
  const {todos} = useSelector(store=>store.userRoot)
  const [id,setId] = useState("")

  const [showModal,setShowModal] = useState(false)


  const dispatch = useDispatch()

  const editHandler = (d)=>{
    setTodo(d.todo)
    setId(d.id)
    setShowModal(true)
  }

  const clickHandler= ()=>{
    dispatch(editTodo({id, todo}))
    setId("")
    setTodo("")
    setShowModal(false)
  }




  const formHandler = (e) => {
    e.preventDefault()
    if (todo === "") {
      alert("Please add todo, its empty")
      return
    }
    const data = {
      id: uuidv4(),
      todo: todo
    }
    dispatch(setTodos(data))
    setTodo("")

  }

  return (
    <>
    <Modal show={showModal} onHide={()=>setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit todo</Modal.Title>
        </Modal.Header>
        <input type="text" placeholder="Edit todo" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <Modal.Footer>
          <Button variant="primary" onClick ={clickHandler}>
            Edit 
          </Button>
        </Modal.Footer>
      </Modal>
    <form onSubmit={formHandler}>
      <input type="text" placeholder="Enter todo .." value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button type="submit">Add todo</button>
    </form>
    <div>
      {todos.length !== 0 ? todos.map(d=>
      <>
       <h4 onClick={()=>dispatch(deleteTodo(d.id))}>{d.todo}</h4>
       <button onClick={()=>editHandler(d)} >Edit</button>
       </>
      ):<p>No todos to show, please add</p>}

    </div>

    </>

    

  );
}

export default App;
