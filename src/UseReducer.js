import React, { useReducer } from 'react'

const initialstate = 0

const reducer = (state, action) => {
    console.log(state, action)

    if (action.type === "INCREMENT") {
        state = state + 1
    }

    if (action.type === "DECREMENT") {

        if (state <= 0) {
            state = state
        } else {
            state = state - 1
        }
        
    }
    return state;

}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialstate)
    return (
        <>
            <div>{state}</div>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button> <br />
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        </>


    )
}

export default UseReducer