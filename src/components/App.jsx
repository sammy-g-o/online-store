import HomePage from "../pages/homepage";
import CartPage from "../pages/cartPage";
import PhonePage from "../pages/phonePage";
import LaptopPage from "../pages/laptopPage";
import AccessoriesPage from "../pages/accessoriesPage";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [modal, setModal] = useState(null);
  const [cart, setCart] = useState([]);
  function handleAddToCart(device) {
    if (!cart.includes(device)) {
      setCart([...cart, device]);
      alert(`${device.name} has been added to cart`);
      setModal(device.name)
    } else {
      console.log("damn, error");
    }
  }

  function handleDeleteFromCart(name) {
    setCart(cart.filter((cart) => cart.name !== name));
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage handleAddToCart={handleAddToCart} modal={modal} setModal={setModal}/>}/>
        <Route path='/laptops' element={<LaptopPage handleAddToCart={handleAddToCart} modal={modal} setModal={setModal}/>}/>
        <Route path='/phones' element={<PhonePage handleAddToCart={handleAddToCart} modal={modal} setModal={setModal}/>}/>
        <Route path='/accessories' element={<AccessoriesPage handleAddToCart={handleAddToCart} modal={modal} setModal={setModal}/>}/>
        <Route path='/cart' element={<CartPage handleDeleteFromCart={handleDeleteFromCart} cart={cart}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
