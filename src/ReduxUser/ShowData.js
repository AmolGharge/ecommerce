import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showName } from './Slice'

const ShowData = () => {
    const [isOk, setIsOk] = useState(false)
    const userData = useSelector((state) => state.userName)

    console.log(userData)

    const dispatch = useDispatch()

    const handleName = () => {
        dispatch(showName())
        setIsOk(true)
    }
    return (
        <div>
            <button onClick={() => handleName()} >Show Data</button>
            {
                isOk ?
                <h1>Hello { userData.map((data, i) => {
                    return data.name
                })} </h1>

                :

                userData.map((data, i) => {
                    return <li key={i}>{data.name}</li>
                })
            }
            

        </div>
    )
}

export default ShowData