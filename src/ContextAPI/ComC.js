import React from 'react'
import { FirstName } from './ComA'

const ComC = () => {
  return (
    <>
      
    <FirstName.Consumer> 
      {(fname) => { 
        return <h1>My Name is {fname}</h1>
    }}

    </FirstName.Consumer>
    </>
  )
}

export default ComC