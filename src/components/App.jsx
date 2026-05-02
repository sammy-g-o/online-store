import HomePage from "../pages/homepage";
import CartPage from "../pages/cartPage";
import PhonePage from "../pages/phonePage";
import LaptopPage from "../pages/laptopPage";
import AccessoriesPage from "../pages/accessoriesPage";
import ProductDetailsPage from "../pages/productDetailsPage";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";
function App() {
  const [modal, setModal] = useState(null);
  const [cart, setCart] = useState([]);
  function handleAddToCart(device) {
    if (!cart.find((item) => item.name === device.name)) {
      setCart([...cart, { ...device, quantity: 1 }]);
      setModal(device.name);
    }
  }

  function handleDeleteFromCart(name) {
    setCart(cart.filter((item) => item.name !== name));
  }

  function handleIncreaseQuantity(name) {
    setCart(cart.map((item) =>
      item.name === name ? { ...item, quantity: item.quantity + 1 } : item
    ));
  }

  function handleDecreaseQuantity(name) {
    setCart(cart.map((item) =>
      item.name === name && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  }
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              handleAddToCart={handleAddToCart}
              modal={modal}
              setModal={setModal}
            />
          }
        />
        <Route
          path="/laptops"
          element={
            <LaptopPage
              handleAddToCart={handleAddToCart}
              modal={modal}
              setModal={setModal}
            />
          }
        />
        <Route
          path="/phones"
          element={
            <PhonePage
              handleAddToCart={handleAddToCart}
              modal={modal}
              setModal={setModal}
            />
          }
        />
        <Route
          path="/accessories"
          element={
            <AccessoriesPage
              handleAddToCart={handleAddToCart}
              modal={modal}
              setModal={setModal}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              handleDeleteFromCart={handleDeleteFromCart}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
              cart={cart}
            />
          }
        />
        <Route
          path="/laptops/:nameOfDevice"
          element={<ProductDetailsPage />}
        />
        <Route
          path="/phones/:nameOfDevice"
          element={<ProductDetailsPage />}
        />
        <Route
          path="/accessories/:nameOfDevice"
          element={<ProductDetailsPage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
