import {UseStates} from './customHooks/index.js'
const App=()=>{
  const {state,changeSate}=UseStates()
  return(
    <>
    <h1 style={{textAlign:'center'}}>writing somthing in input tag is done by custom useState</h1>
    <div style={{display:'flex',justifyContent:'center'}}>
    <input type='text' value={state} onChange={(e)=>changeSate(e.target.value)}></input>
    <hr/>
    <p>{state}</p>
    </div>
    </>
  )
}
export default App;


