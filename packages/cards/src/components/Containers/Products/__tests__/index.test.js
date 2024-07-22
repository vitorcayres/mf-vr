/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Products from "../../Products";
import { getProducts } from "../../../../services/Backend";
import { useCart } from "../../../../contexts/Cart";

jest.mock("../../../../services/Backend");
jest.mock("../../../../contexts/Cart");

describe("Products Component", () => {
  let mockSetCart;

  beforeEach(() => {
    mockSetCart = jest.fn();
    useCart.mockReturnValue({ setCart: mockSetCart });

    getProducts.mockResolvedValue({
      products: [
        {
          title: "Product 1",
          description: "Description 1",
          thumbnail: "thumb1.jpg",
          price: "10",
        },
        {
          title: "Product 2",
          description: "Description 2",
          thumbnail: "thumb2.jpg",
          price: "20",
        },
      ],
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders without crashing and fetches products", async () => {
    render(<Products />);
    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
    });
  });

  test("loads more products on scroll", async () => {
    getProducts.mockResolvedValueOnce({
      products: [
        {
          title: "Product 3",
          description: "Description 3",
          thumbnail: "thumb3.jpg",
          price: "30",
        },
      ],
    });

    render(<Products />);

    fireEvent.scroll(window, {
      target: {
        scrollingElement: {
          scrollHeight: 200,
          scrollTop: 0,
          clientHeight: 100,
        },
      },
    });

    await waitFor(() => {
      expect(screen.getByText("Product 3")).toBeInTheDocument();
    });
  });

  test("adds product to cart when button is clicked", async () => {
    render(<Products />);

    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
    });

    const addButton = screen.getAllByText("COMPRAS")[0];
    fireEvent.click(addButton);

    expect(mockSetCart).toHaveBeenCalledWith(expect.any(Function));
  });
});
