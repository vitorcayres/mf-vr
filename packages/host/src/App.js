import React from "react";

import { CartProvider } from "Cards/CartContext";

const Cart = React.lazy(() => import("Cards/Cart"));
const Products = React.lazy(() => import("Cards/Products"));

const Header = React.lazy(() => import("Header/Header"));
const Footer = React.lazy(() => import("Footer/Footer"));

const App = () => (
  <React.Fragment>
    <CartProvider>
      <React.Suspense fallback="Loading Header">
        <Header buttonRight={<Cart />} />
      </React.Suspense>

      <React.Suspense fallback="Loading Products">
        <Products />
      </React.Suspense>

      <React.Suspense fallback="Loading Footer">
        <Footer />
      </React.Suspense>
    </CartProvider>
  </React.Fragment>
);

export default App;
