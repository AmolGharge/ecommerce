import React, { createContext } from 'react'
import ComB from './ComB'

const FirstName = createContext();

const ComA = () => {   
    return (
        <FirstName.Provider value={'AMOL GHARGE'}>
            <ComB />
        </FirstName.Provider>
    )
}

export default ComA;
export { FirstName };