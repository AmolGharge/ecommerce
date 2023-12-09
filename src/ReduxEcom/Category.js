// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { displayCategory } from './Slice';
// import ProductsPage from './ProductsPage';

// const Category = ({categValues}) => {

//     const categoryData = useSelector((state) => state.products.categoryItems)
//     const productData = useSelector((state) => state.products.items)

//     const dispatch = useDispatch();

//   return (
//     <div style={{ paddingTop: 10 }}>

//     {
//         categValues.map((item) => {

//             return (
//                 <>
//                     <button type="button" class="btn btn-success" style={{ marginRight: 10 }} onClick={() => dispatch(displayCategory(item))}>{item}</button>

//                     {/* <ProductsPage /> */}

                    
//               {
//                   categoryData.map((avatarcard, i) => {
//                     return <ProductsPage id={productData[i].id}
//                         title={productData[i].title}
//                         price={productData[i].price} />
//                 }
//                 )
//               }
                
                
//                 </>
//             )
//         }
//         )
//     }

// </div>
//   )
// }

// export default Category