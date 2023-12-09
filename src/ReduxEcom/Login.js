
import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom";
import '../App.css'
import ProductsPage from './ProductsPage'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
const Login = () => {
    // const info = "Please insert correct Email and Password"
    // const [showError, setShowError] = useState(info)
    const email = useRef();
    const password = useRef();
    const getEmail = localStorage.getItem('emailData')
    const getPassword = localStorage.getItem('passData')

    const handleSubmit = () => {

        if (email.current.value === "5678@asg.com" && password.current.value === "5678") {
            localStorage.setItem('emailData', '5678@asg.com')
            localStorage.setItem('passData', '5678')
        }
    }
    return (
        <div className='App'>
            
            {
                getEmail && getPassword ?
                    <ProductsPage />
                    :
                    <div style={{paddingTop : 40}}>
                    <div className='input-parent'>
                    <form onSubmit={handleSubmit}>

                        <h1>Login to Product Page</h1>
                        <input type='text'  className='txtStyle' placeholder='Enter Name' name='text' ref={email} />
                        <br /><br />
                        <input type='text' className='txtStyle' placeholder='Enter Password' name='password' ref={password} />

                        <br /><br />

                        {/* <button type='submit'><Link to = "/productspage"> Submit</Link></button> */}

                        <MDBBtn>Login</MDBBtn>

                    </form>
                    </div>
                    </div>
            }

           

        </div>

    )
}
export default Login 