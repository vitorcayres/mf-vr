import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../Header";

jest.mock("../../Icons/Logo", () => () => <div data-testid="icon-logo" />);

jest.mock("../styled", () => ({
  Container: "div",
}));

describe("Header Component", () => {
  test("renders the header with the logo and buttonRight content", () => {
    const buttonRightContent = <button>Click Me</button>;

    render(<Header buttonRight={buttonRightContent} />);
    expect(screen.getByTestId("icon-logo")).toBeInTheDocument();
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });
});
