import React, { useState } from 'react'
import './App.css'

const ToDo = () => {
    const[list, setList] = useState("")
    const[print, setPrint] = useState([])

    const addList = () => {

        setPrint ((oldItems) => {
          return [...oldItems, list]

        }
        
        )
        setList("")
    }

  return (
    <>
    <h1>To Do List</h1>
    
    <input type='text' name='name' placeholder='Enter Name' onChange={(e)=> setList(e.target.value)}  /><br /><br />
    <button onClick={addList}>Add</button>

    {
      print.map((curItem,i) => {
        return <li key={i}>{curItem}</li> 
      })
    }
  
    </>
    
  )
}

export default ToDo