import './App.css';
import AvatarList from './Avatar/AvatarList';
// import Popup from './Popup';
// import ShowToDo from './ReduxThunk-ToDo/ShowToDo'
import DisplayData from './InputText/DisplayData';
// import ProductsPage from './ReduxEcom/ProductsPage';
// import Header from './ReduxEcom/Header';
// import Cart from './ReduxEcom/Cart';
// import Login from './ReduxEcom/Login';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import AppForm from './FormValidation/AppForm';
// import UseReducer from './UseReducer';

// import ComA from './UseContext/ComA';
import ToDo from './ToDo';

function App() {
  return (
    <div className="App">
      <DisplayData />
        {/* <ShowToDo /> */}
        
      {/* <BrowserRouter>
      <ToastContainer />
      {/* <Header /> */}
      {/* <Login /> */}
        {/* <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="productspage" element={<ProductsPage />} />
          <Route path="cart" element={<Cart />} />
        </Routes> */}
      {/* </BrowserRouter> */}

    </div>

    // <Popup />
  );
}

export default App;
