import './App.css';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {Modal, Button} from 'react-bootstrap'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [currentTask, setCurrentTask] = useState({})

  const [show, setShow] = useState(false);


  const addTaskHandler = (e) => {
    e.preventDefault()
    if (task === "") {
      alert("Please enter task")
      return
    }
    const id = uuidv4()
    setTasks([...tasks, { id, task }])
    setTask("")
  }

  const editHandler = (id)=>{
    setShow(true)
    const curr_task = tasks.find(t=>t.id === id)
    setCurrentTask(curr_task)
  }

  const saveTask = (e)=>{
    e.preventDefault()
    const index = tasks.findIndex(t=>t.id === currentTask.id)
    const t = tasks
    t.splice(index,1, {...currentTask})
    setTasks(t)
    setShow(false)
  }

  const deleteHandler = (id)=>{
    const filteredData = tasks.filter(t=>t.id !== id)
    setTasks([...filteredData])
  }

  return (
    <>
       <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={saveTask}>
            <input type="text" placeholder="edit task.." value={currentTask.task} onChange={(e) => setCurrentTask({...currentTask,task:e.target.value})} />
            <Button variant="primary" type="submit">
            Save Changes
          </Button>
          </form>
        </Modal.Body>
      </Modal>
      <div className="App">
        <form onSubmit={addTaskHandler}>
          <input type="text" placeholder="task .." value={task} onChange={(e) => setTask(e.target.value)} />
          <button type="submit">Add</button>
        </form>
        <div>
          {tasks.map(t =>
            <>
              <h3>{t.task}</h3>
              <button onClick={()=>editHandler(t.id)}>Edit</button>
              <button onClick={()=>deleteHandler(t.id)}>Delete</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
