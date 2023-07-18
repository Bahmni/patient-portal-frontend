import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom/extend-expect";

test("renders footer container", () => {
  render(<Footer />);
  const footerContainer = screen.getByTestId("footer-container");
  expect(footerContainer).toBeInTheDocument();
});
