import React, { createContext } from 'react'
import ComB from './ComB'

const FirstName = createContext()
const LastName = createContext()

const ComA = () => {
    return (
        // <FirstName.Provider value={("AMOL", {} , [], "ASG")}>
            <FirstName.Provider value={"AMOL"}>
            <LastName.Provider value={'GHARGE'}>
                <ComB />
            </LastName.Provider>
        </FirstName.Provider>
    )
}

export default ComA
export { FirstName, LastName }