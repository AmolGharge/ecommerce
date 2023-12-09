import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './Slice'

const ShowData = () => {

const data = useSelector((state) => state.show.value)
const dispatch = useDispatch()

console.log(data)
  return (
    <div>
        <h1>Show Data {data}</h1>
        <button onClick={()=> dispatch(increment())}>Click</button>
    </div>
    
  )
}

export default ShowData