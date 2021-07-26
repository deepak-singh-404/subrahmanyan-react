import { useState } from "react";
import Context from "./../DataStore";

const InputData = () => {
   
    const [input,setInput]=useState('')
  return (
      <Context.Consumer>
        {({ items,setItems }) => {
            const addValue=(e)=>{
                e.preventDefault()
                setItems((s)=>([...s,input]))
                setInput('')
            }
          return (
             <div><form onSubmit={addValue}>
                 <div style={{display:'flex',justifyContent:'center'}}>
                 <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}
                 
             ></input><button type='submit'>Submit</button></div></form></div>
          );
        }}
      </Context.Consumer>
  );
};
export default InputData;
