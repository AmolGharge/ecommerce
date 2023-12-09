import React, { useEffect, useState } from 'react';
import '../App.css'

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBIcon

} from 'mdb-react-ui-kit';
import { Link} from "react-router-dom";
import { useSelector } from 'react-redux'

export default function Header() {

const itemNo = useSelector((state)=> state.products.cart)

// console.log(itemNo.length)

const clearData = () => {
  localStorage.clear();
  window.location.reload();
} 

return (
    <MDBNavbar className='navbar' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Shopping Cart Demo</MDBNavbarBrand>
        <span><Link to = "/productspage"> All Products</Link> </span>
        <Link to="/cart"> <MDBIcon fas icon='shopping-cart'/><span className="badge badge-pill bg-danger">{itemNo.length}</span> </Link>
        {/* <Link to="/"><MDBBtn className="btn-close" color="none" aria-label="Close" onClick={clearData} /></Link> */}

        <Link to="/"><MDBBtn className='text-dark' color='light' onClick={clearData} >
        Signout
      </MDBBtn></Link>
        
      </MDBContainer>
    </MDBNavbar>
)
}