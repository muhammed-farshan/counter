import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/counterSlice'


function Counter() {
    // react hook to call a function/action inside a slice :useDispatch()
    const dispatch = useDispatch()
    // hook to access store in component : useSelecter()
    const count = useSelector((state) => state.Counter.value)
    const [range,setRange] = useState(0)
    console.log("Range:", range);
    const resetAll = ()=>{
      dispatch(reset());
      setRange(0)
    }
  return (
   <>
     <div className='d-flex align-items-center justify-content-center w-100 flex-column'>
        <h3 style={{fontSize:'40px'}}>{count}</h3>
        <div className='mt-3'>
            <button className='btn btn-danger' onClick={()=>dispatch(decrement(Number(range)))}>Decrement</button>
            <button className='btn btn-warning ms-3'onClick={resetAll} style={{width:'110px'}}>Reset</button>
            <button className='btn btn-success ms-3' onClick={()=>dispatch(increment(Number (range)))}>Increment</button>
        </div>
     </div>
     <input type="text" className='form-control mt-3 w-100 ' placeholder='Enter Range' style={{borderColor:'blue'}}
     onChange={(e)=>setRange(e.target.value)} value={range} />
   </>
  )
}

export default Counter