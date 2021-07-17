import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {setProfile} from '../redux/actions/userAction'


const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch()

  const [prof, setProf] = useState({name:"", email:""})

  const formHandler = (e)=>{
    e.preventDefault()
    if (!(prof.name && prof.email)){
      alert("Fields are empty")
      return
    }
    localStorage.setItem("profile",JSON.stringify(prof))
    dispatch(setProfile(prof,history))
  }

  return (
    <div>
      <form onSubmit={formHandler}>
        <input placeholder="Enter your name" value={prof.name} onChange={(e)=>setProf({...prof, name:e.target.value})}/>
        <input placeholder="Enter your email" value={prof.email} onChange={(e)=>setProf({...prof, email:e.target.value})}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Login
