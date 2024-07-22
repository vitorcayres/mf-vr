import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../Footer";

jest.mock("../../Icons/Logo", () => () => <div data-testid="icon-logo" />);

jest.mock("../styled", () => ({
  Container: "div",
}));

describe("Footer Component", () => {
  test("renders the footer with the logo and copyright text", () => {
    render(<Footer />);

    expect(screen.getByTestId("icon-logo")).toBeInTheDocument();
    expect(
      screen.getByText("© 2024 VR Benefícios - Todos os direitos reservados")
    ).toBeInTheDocument();
  });
});
