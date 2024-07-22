import React from "react";
import { CartProvider } from "./contexts/Cart";
import Products from "./components/Containers/Products";
import Cart from "./components/Containers/Cart";

const App = () => {
  return (
    <CartProvider>
      <Cart />
      <Products />
    </CartProvider>
  );
};

export default App;
