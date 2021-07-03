import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {incrementCounter, decrementCounter} from './redux/actions/userAction'

function App() {

  const dispatch = useDispatch()
  const {counter} = useSelector(s=>s.userRoot)

  return (
    <div className="App">
      <button onClick={()=>dispatch(incrementCounter())}>Increment</button>
      <h2>{counter}</h2>
      <button onClick={()=>dispatch(decrementCounter())}>Decrement</button>
    </div>
  );
}

export default App;
