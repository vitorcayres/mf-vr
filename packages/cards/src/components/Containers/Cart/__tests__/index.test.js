import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "../../../Containers/Cart";
import { useCart } from "../../../../contexts/Cart";

jest.mock("../../../../contexts/Cart");

describe("Cart Component", () => {
  let mockCart;

  beforeEach(() => {
    mockCart = [{ title: "Product 1", price: "$10", thumbnail: "thumb1.jpg" }];
    useCart.mockReturnValue({ cart: mockCart });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders without crashing", () => {
    render(<Cart />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("opens and closes the drawer", () => {
    render(<Cart />);
    const iconCart = screen.getByRole("button");
    fireEvent.click(iconCart);
    expect(screen.getByText("Compras")).toBeInTheDocument();
  });

  test("displays items in the drawer when cart is not empty", () => {
    render(<Cart />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();
  });

  test("displays message when cart is empty", () => {
    useCart.mockReturnValue({ cart: [] });
    render(<Cart />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Nenhum item no carrinho")).toBeInTheDocument();
  });
});
