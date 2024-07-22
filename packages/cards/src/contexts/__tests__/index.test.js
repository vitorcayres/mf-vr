import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartProvider, useCart } from "../../contexts/Cart";

const CartContext = () => {
  const { cart, setCart } = useCart();

  return (
    <div>
      <p data-testid="cart-length">{cart.length}</p>
      <button onClick={() => setCart([...cart, "item"])}>Add Item</button>
    </div>
  );
};

describe("CartContext", () => {
  test("provides cart and setCart to components", () => {
    render(
      <CartProvider>
        <CartContext />
      </CartProvider>
    );

    const cartLength = screen.getByTestId("cart-length");
    expect(cartLength).toHaveTextContent("0");

    const button = screen.getByText("Add Item");
    fireEvent.click(button);
    expect(cartLength).toHaveTextContent("1");
  });
});
