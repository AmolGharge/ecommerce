import React, { useEffect, useState } from 'react';
import '../App.css'

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCardSubTitle,
    MDBContainer,
    MDBIcon,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter

} from 'mdb-react-ui-kit';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addDetails, removeFromCart, displayCategory } from './Slice';
import { fetchData } from './Slice';

export default function ProductsPage() {

    const [basicModal, setBasicModal] = useState(false);
    const [isAdded, setIsAdded] = useState(false)
    const [data, setData] = useState()

    const productData = useSelector((state) => state.products.items)
    const itemData = useSelector((state) => state.products.singleItem)
    const categoryData = useSelector((state) => state.products.categoryItems)

    const toggleShow = () => setBasicModal(!basicModal);
    const dispatch = useDispatch()

    //  const fetchProduct = async () => {
    //      const response = await axios
    //          .get('https:fakestoreapi.com/products')
    //          .catch((err) => {
    //              console.log('Error', err);
    //          });
    //          console.log(response)
    //      dispatch(addProducts(response))
    //  }

    const handleAddItem = (item) => {
        dispatch(addToCart(item))
    }

    const showDetails = (item) => {
        dispatch(addDetails(item))
        { toggleShow() }
    }

    // const filterItem = (categItem) => { 
    //     console.log(categItem)
    //     let updatedItem = productData.filter((curElem)=> {
    //         return curElem.category === categItem
    //     })
    //     console.log(updatedItem)
    // }

    const categValues = [...new Set(productData.map((curElem) => {
        return curElem.category
    })), 'All']

    console.log(categValues)
    
    // const itemCategory =(updatedItem) => {
    //     console.log(updatedItem)
    //     dispatch(displayCategory(updatedItem))
    // }

    useEffect(() => {
        //  fetchProduct();
        dispatch(fetchData())

    }, [])

    // var uniqueData = [...new Set(productData.map(item => item.category))]
    // console.log(uniqueData)

    let abcVal
    if (categValues === 'All') {
        abcVal = productData
    } else abcVal = categoryData

    console.log(abcVal)
    
    return (
        <>
            <div style={{ paddingTop: 80 }}>

                {
                    categValues.map((item) => {

                        return (
                            <>

                                <button type="button" class="btn btn-success" style={{ marginRight: 10 }} onClick={() => dispatch(displayCategory(item))}>{item}</button>

                                {/* <button type="button" class="btn btn-danger" style={{ marginRight: 10 }} onClick={()=> filterItem("men's clothing")}>Men's Clothing</button>
                        <button type="button" class="btn btn-danger" style={{ marginRight: 10 }} onClick={()=> filterItem("women's clothing")}>Women's Clothing</button>
                        <button type="button" class="btn btn-warning" style={{ marginRight: 10 }} onClick={()=> filterItem("electronics")}>Electronics</button>
                        <button type="button" class="btn btn-info" style={{ marginRight: 10 }} onClick={()=> filterItem("jewelery")}>Jewelery</button>
                        <button type="button" class="btn btn-primary" style={{ marginRight: 10 }} onClick={()=> filterItem("all")}>All</button>
                         */}
                            </>
                        )
                    }
                    )
                }

            </div>

            <div style={{ paddingTop: 30 }}>
                
                <MDBContainer>
                    <MDBRow className='mb-3 ms-2 me-2'>


                        {
                            
         
                            abcVal.map((item, i) => {
                                return (

                                    <MDBCol size='3' style={{ paddingBottom: 30 }} >
                                        <MDBCard>
                                            <div className="ui link cards">
                                                <div className="card">
                                                    <div className="image">
                                                        <img src={item.image} />
                                                    </div>

                                                </div>
                                            </div>
                                            <MDBCardBody>
                                                <MDBCardTitle>{item.title.substring(0, 20)}</MDBCardTitle>
                                                <MDBCardSubTitle>₹ {item.price}</MDBCardSubTitle>
                                                <MDBCardText>{item.description.substring(0, 200)}</MDBCardText>

                                                {isAdded ?
                                                    <MDBBtn className='me-2' onClick={() => dispatch(removeFromCart(item.id))}><MDBIcon fas icon='cut' /></MDBBtn>
                                                    :
                                                    <MDBBtn className='me-3' onClick={() => handleAddItem(item)}><MDBIcon fas icon='shopping-cart' /></MDBBtn>
                                                }

                                                <MDBBtn onClick={() => showDetails(item)}>Details</MDBBtn>
                                                <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>

                                                    {
                                                        itemData.map((elem, i) => {
                                                            return (

                                                                <MDBModalDialog>
                                                                    <MDBModalContent>
                                                                        <div className="ui link cards" style={{ alignSelf: 'center' }}>
                                                                            <div className="card">
                                                                                <div className="image">
                                                                                    <img src={elem.image} />
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                        <MDBModalHeader>
                                                                            <MDBModalTitle>{elem.title}</MDBModalTitle>
                                                                            <MDBCardSubTitle> ₹ {elem.price}</MDBCardSubTitle>
                                                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                                                        </MDBModalHeader>
                                                                        <MDBModalBody>{elem.description.substring(0, 200)}</MDBModalBody>

                                                                    </MDBModalContent>
                                                                </MDBModalDialog>

                                                            )
                                                        })
                                                    }



                                                </MDBModal>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                )
                            })
                        }
                    </MDBRow>
                </MDBContainer>
            </div>
        </>
    )

}
