import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../Button";
import "../styled";

jest.mock("../styled", () => ({
  Button: "button",
}));

describe("Button Component", () => {
  test("renders the button with the correct title", () => {
    render(<Button title="Click" />);
    expect(screen.getByText("Click")).toBeInTheDocument();
  });

  test("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button title="Click" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
