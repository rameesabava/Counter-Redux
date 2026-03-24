import React from 'react'

function Counter() {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
        <div className='border border-light p-5'>
<h1 className='text-light text-center p-5 fs-1'>0</h1>
<div className='d-flex justify-content-evenly gap-4'>
    <button className='bg-warning rounded border p-2'>Decrement</button>
    <button className='bg-danger text-light rounded border p-2'>Reset</button>
    <button className='bg-success text-light rounded border p-2'>Increment</button>
</div>
<div className='d-flex justify-content-center align-items-center gap-4 w-100 mt-2'>
    <input className='p-2' type="text" placeholder='Enter the amount to be Incremented!!!' />
    <button className='text-light bg-primary rounded border p-2'>Increment by Amount</button>
</div>
        </div>

    </div>
  )
}

export default Counter