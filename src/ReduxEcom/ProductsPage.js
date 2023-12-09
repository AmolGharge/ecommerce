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
import Header from './Header';

export default function ProductsPage() {

    // localStorage.clear ();
    // window.location.reload();

    const [basicModal, setBasicModal] = useState(false);
    const [isAdded, setIsAdded] = useState(false)

    const productData = useSelector((state) => state.products.items)
    const itemData = useSelector((state) => state.products.singleItem)
    const categoryData = useSelector((state) => state.products.categoryItems)

    const toggleShow = () => setBasicModal(!basicModal);
    const dispatch = useDispatch()

    const handleAddItem = (item) => {
    dispatch(addToCart(item))
    }

    const showDetails = (item) => {
    dispatch(addDetails(item))
        { toggleShow() }
    }

    const categValues = [...new Set(productData.map((curElem) => {
    return curElem.category
    })), 'All']

    useEffect(() => {
         dispatch(fetchData())
    }, [])

    return (
        <>

        <Header />
            <div style={{ paddingTop: 80 }}>
                {
                    categValues.map((item) => {

                        return (
                            <>
                                <button type="button" class="btn btn-success" style={{ marginRight: 10 }} onClick={() => dispatch(displayCategory(item))}>{item}</button>
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
                            categoryData.map((item, i) => {
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
                                                <MDBCardText>{item.description.substring(0, 72)}</MDBCardText>

                                                { isAdded ?
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
