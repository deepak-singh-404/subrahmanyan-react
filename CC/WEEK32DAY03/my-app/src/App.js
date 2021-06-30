import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [t, setT] = useState(new Date())
  const [alarm, setAlarm] = useState("")


  console.log(t, t.toLocaleTimeString())

  useEffect(()=>{
    setInterval(()=>{
      setT(new Date())
    },1*1000)

    return ()=>{
      setT(null)
    }
  },[])

  useEffect(()=>{
    console.log("time", t.toLocaleTimeString().split(":").slice(0,2).join(":"))
    console.log("Alarm time", alarm)

    if(t.toLocaleTimeString().split(":").slice(0,2).join(":") === alarm){
      alert("ALARM")
    }


  },[t])

  const formHandler = (e)=>{
    e.preventDefault()
  
  }

  return (
    <div className="App">
      <h5>TIME</h5>
      <h4>{t.toLocaleTimeString()}</h4>
      <br />
      <h5>Set ALARM</h5>
      <form onSubmit={formHandler} >
        <input onChange={(e)=>setAlarm(e.target.value)} type="time"/>
        <button type="submit">Set</button>
      </form>
    </div>
  );
}

export default App;
