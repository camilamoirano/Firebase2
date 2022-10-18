import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.css";
import ItemListContainer from "./components/Products/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from "./components/Cart/cartView.jsx";
import CartContextProvider from './context/cartContext';
import Checkout from './components/Checkout/Checkout';
import { exportDataToFirestore } from './services/firestore';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Productos Disponibles"/>}/>
          <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
          <Route path="/categoria/:cat" element={<ItemListContainer/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout/:orderid" element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
 