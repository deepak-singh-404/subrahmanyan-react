import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {setUser, incrementCounter, decrementCounter, setPosts} from './redux/actions/userAction'

function App() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const dispatch = useDispatch()
  const {user, counter, posts} = useSelector(s=>s.userRoot)


  useEffect(() => {
    const getPost = async()=>{
      const {data} = await axios({
        url:"http://jsonplaceholder.typicode.com/posts",
        method:"get"
      })
      dispatch(setPosts(data))
    }
    getPost()
  }, [])



  const formHandler = (e)=>{
    e.preventDefault()
    dispatch(setUser({email, name}))
  }
  return (
    <div className="App">
      <form onSubmit={formHandler}>
       <input type ="text" placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type ="email" placeholder="Your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button type="submit">Submit</button>
      </form>

      <button onClick={()=>dispatch(incrementCounter())}>Increment</button>
      <h2>{counter}</h2>
      <button onClick={()=>dispatch(decrementCounter())}>Decrement</button>
      {console.log("user", user)}
      {console.log("post", posts)}
    </div>
  );
}

export default App;
