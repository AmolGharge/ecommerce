import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const fetchData = createAsyncThunk('fetchdata', async () => {
    // const res = await fetch('https://fakestoreapi.com/products');
    // return res.json();

    const request = await fetch('https://fakestoreapi.com/products');
    const response = await request.json();
    const res = response.map((user) => ({ ...user, quantity: 1 }));
    return res
})

const showSlice = createSlice({
    name: 'product',
    initialState: {
        cart: [],
        items: [],
        singleItem: [],
        categoryItems: [],
        totalQuantity: 0,
        totalPrice: 0,
        isLoading: false,
        isError: false
    },
    reducers: {

        // addToCart: (state, action) => {
        //     state.cart.push(action.payload)
        // },

        addToCart: (state, action) => {      //once item is added in a cart, will not be added again
            const itemIndex = state.cart.findIndex(
                item =>item.id === action.payload.id
            );
            if (itemIndex >=0) {
                state.cart[itemIndex].quantity +=1
                // toast.info('Item already added in cart')
                toast.success("Item already added to cart", {
                    theme: "colored"
                  })

            } else {
                state.cart.push(action.payload)
                toast.success("Item added to cart", {
                    theme: "colored"
                  })

                
            }


        },


        addDetails: (state, action) => {
            state.singleItem.pop(action.payload)
            state.singleItem.push(action.payload)
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },

        deleteCartItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },

        incrementQuantity: (state, action) => {
            state.cart = state.cart.map((item, id) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item
            })
        },

        decrementQuantity: (state, action) => {
            state.cart = state.cart.map((item, id) => {
                if (item.id === action.payload.id && item.quantity >1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item
            })
        },

        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;

                },

                {
                    totalPrice:0,
                    totalQuantity :0,
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2))
            state.totalQuantity = totalQuantity
        },

        displayCategory : (state, action) => {
            state.categoryItems = [] // empty the state to add new category items
            const updatedItem = state.items.filter((curElem)=> {
                if (curElem.category === action.payload) {
                    state.categoryItems.push(curElem)
                } 

                if (action.payload === 'All') {
                    state.categoryItems = []
                    state.categoryItems = state.items
                    
                } 
        })

        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.items = action.payload;
            state.categoryItems=action.payload
            state.isLoading = false;
        })

        builder.addCase(fetchData.rejected, (state, action) => {
            state.isError = true

        })
    }
})

export const { addToCart, addDetails, removeFromCart, deleteCartItem, incrementQuantity, decrementQuantity, getCartTotal, displayCategory } = showSlice.actions
export default showSlice.reducer 