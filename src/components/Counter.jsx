import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/slices/counterSlice'

function Counter() {
  const {count} = useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()
const inputRef = useRef()

const handleIncrement = ()=>{
  const amount = inputRef.current.value
  if(amount){
    dispatch(incrementByAmount(+amount))
    inputRef.current.value = ""

  }else{
    alert("Enter valid amount!!!")
  }
}

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
        <div style={{borderRadius:'20px', width:'500px'}} className='border border-light p-4 text-center'>
<h1 style={{fontSize:'150px'}} className='text-light text-center p-5'>{count}</h1>
<div className='d-flex justify-content-evenly gap-4 mb-4'>
    <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
    <button onClick={()=>dispatch(reset())} className='btn btn-danger text-light rounded border p-2'>Reset</button>
    <button onClick={()=>dispatch(increment())} className='btn btn-success text-light rounded border p-2'>Increment</button>
</div>
<div className='d-flex justify-content-center align-items-center gap-4 w-100 mt-2'>
    <input ref={inputRef} className='p-2 form-control' type="text" placeholder='Enter the amount to be Incremented!!!' />
    <button onClick={handleIncrement} className='text-light bg-primary rounded border p-2'>Increment by Amount</button>
</div>
        </div>

    </div>
  )
}

export default Counter