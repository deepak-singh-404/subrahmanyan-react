import React, {useState} from 'react'

const Fbc = () => {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])

    const formHandler = (e)=>{
        e.preventDefault()
        if(input){
            setTodos([...todos, input])
        }
        else{
            alert("Pls write something")
        }
    }
    
     
    return (
        <div>
            <form onSubmit={formHandler}>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Enter todo.."  />
            <button type="submit">Submit</button>
            </form>

            {todos.length !== 0 ? todos.map(todo=>
            <h3>{todo}</h3>
            ): <p>No todos to show</p>}
           
            
        </div>
    )
}

export default Fbc
