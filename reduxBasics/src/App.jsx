import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,incrementBy5,decrementBy5, incrementByAmount } from './redux/features/counterSlice';
import { useState } from 'react';

const App = () => {

  const dispatch = useDispatch();

  const count = useSelector((state)=>state.counter.value)
  const [num, setnum] = useState(5);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        dispatch(increment());
      }} >Increment</button>
      <button onClick={()=>{
        dispatch(decrement());
      }}>Decrement</button>
       <button onClick={()=>{
        dispatch(incrementBy5());
      }} >Increment by 5</button>
      <button onClick={()=>{
        dispatch(decrementBy5());
      }}>Decrement by 5</button>

      <input value={num}
        onChange={(e)=>{
          setnum(e.target.value)
        }}

        type="number" />
     <button onClick={()=>{
        

        dispatch(incrementByAmount(Number(num)));
      }}>Increment by amount </button>
   
    
    </div>
  )
}

export default App