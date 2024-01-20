import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import ProductDetail from './Components/ProductDetail';
import SearchItem from './Components/SearchItem';
import Cart from './Components/Cart';
import { items } from './Components/Data';
import { useState } from "react";


const App = () => {
  const [data, setData] = useState([...items]);

  const [cart, setCart] = useState([])

  return (
    <div className="h-full">
      <Navbar setData={setData} cart={cart} />

      <Routes>
        <Route path="/" element={<Product items={data} cart={cart} setCart={setCart} />} />
        <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
        <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>


     
    </div>
  );
};

export default App;
