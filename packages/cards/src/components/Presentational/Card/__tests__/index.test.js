import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "../../Card";
import "../styled";

jest.mock("../styled", () => ({
  Card: "div",
  Title: "div",
  Action: "div",
}));

jest.mock("../../Button", () => ({ title, onClick }) => (
  <button onClick={onClick}>{title}</button>
));

describe("Card Component", () => {
  const mockProps = {
    title: "Title",
    description: "Description",
    image: "image.jpg",
    price: "$5",
    buttonTitle: "Buy",
    onClick: jest.fn(),
  };

  test("renders the card with the correct content", () => {
    render(<Card {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
    expect(screen.getByAltText("card")).toHaveAttribute("src", mockProps.image);
    expect(screen.getByText(mockProps.price)).toBeInTheDocument();
    expect(screen.getByText(mockProps.buttonTitle)).toBeInTheDocument();
  });

  test("calls the onClick handler when the button is clicked", () => {
    render(<Card {...mockProps} />);
    fireEvent.click(screen.getByText(mockProps.buttonTitle));
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
