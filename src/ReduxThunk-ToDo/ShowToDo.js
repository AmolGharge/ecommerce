import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchToDo } from './Slice'

const ShowToDo = () => {

  const dataList = useSelector((state) => state.todo)
  const dispatch = useDispatch();

  console.log(dataList)

  if (dataList.isLoading) {
    <h1> Loading ... </h1>
  }

  return (
    <div>
      <h1> Show To Do List </h1>
      <button onClick={() => dispatch(fetchToDo())}>Show List</button>
      {
        dataList.data.map((item,i) => (
          <li key={i}>{item.title}</li>
        )
          
        )
      }
    </div>

  )
}

export default ShowToDo