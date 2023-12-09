import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCartItem, incrementQuantity, decrementQuantity, getCartTotal } from './Slice'
import Header from './Header' 

const Cart = () => {

  // const data = useSelector((state) => state.products.cart)

  const {cart, totalQuantity, totalPrice} = useSelector((state) => state.products)

  const dispatch = useDispatch();

  
  // const handlePrice = () => {
  //   let ans = 0;
  //   cart.map((item) => (ans += item.amount * item.price));
  //   setPrice(ans);
  // };

  // useEffect(() => {
  //   handlePrice();
  // });

  const increaseQuantity = (item) => {
  dispatch(incrementQuantity(item))
  }

  const decreaseQuantity = (item) => {
    dispatch(decrementQuantity(item))
    }

useEffect(() => {
  dispatch(getCartTotal())

//   {
//     let cartTotal = data.map((element, i) => {
//       return element.price
//     })

//     let sum = 0;
//     for (let num of cartTotal) {
//       sum = sum + num
//     }
//     setCartPrice(sum)
//   }

}, [cart])

return (

  <div>
    <Header />
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Cart Items</h5>
              </div>
              <div className="card-body">

                {
                  cart.map((item) => {
                    return (

                      <div className="row">

                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">

                          <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                            <img src={item.image}
                              className="w-100" alt="Blue Jeans Jacket" />
                            <a href="#!">
                              <div className="mask" style={{ backgroundcolor: 'rgba(251, 251, 251, 0.2)' }}></div>
                            </a>
                          </div>

                        </div>

                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">

                          <p><strong>{item.title}</strong></p>
                          <p>{item.category}</p>
                          <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                            title="Remove item">
                            <i className="fas fa-trash" onClick={() => dispatch(deleteCartItem(item.id))}></i>
                          </button>


                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">

                          <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                            <button className="btn btn-primary px-3 me-2"
                              onClick={()=> decreaseQuantity(item)}>
                              <i className="fas fa-minus"></i>
                            </button>

                            <div className="form-outline">
                              <input id="form1" min="0" name="quantity" value={item.quantity} type="number" className="form-control" />
                              {/* <label className="form-label" htmlFor="form1">Quantity</label> */}
                            </div>

                            <button className="btn btn-primary px-3 ms-2"
                              onClick={() => increaseQuantity(item)}>
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>

                          <p className="text-start text-md-center">
                            <strong>₹ {item.price}</strong>
                          </p>

                        </div>
                      </div>
                    )

                  })}
                <hr className="my-4" />

              </div>
            </div>


          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products Quantity
                    <span>{totalQuantity}</span>
                  </li>

                  <li
                    className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                    </div>

                    <span><strong>{totalPrice}</strong></span>
                  </li>
                </ul>

                <button type="button" className="btn btn-primary btn-lg btn-block">
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
)

}





//   )
// }

export default Cart