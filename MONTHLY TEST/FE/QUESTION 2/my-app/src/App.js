import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [t, setT] = useState(new Date())

  useEffect(()=>{
    setInterval(()=>{
      setT(new Date())
    },1*1000)

    return ()=>{
      setT(null)
    }
  },[])
  
  return (
    <div className="App">
      <h5>TIME</h5>
      <h4>{t.toLocaleTimeString()}</h4>
    </div>
  );
}

export default App;