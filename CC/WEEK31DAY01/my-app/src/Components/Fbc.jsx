import React, {useState} from 'react'

const Fbc = () => {
  const [toggle, setToggle] = useState(false)
  const clickHandler = ()=>{
    setToggle(true)
    setTimeout(()=>{
      setToggle(false)
    }, 5000)
  }
    return (
        <div className="App">
        <button disabled={toggle} onClick={clickHandler}>FBC Example</button>
      </div>
    )
}

export default Fbc
