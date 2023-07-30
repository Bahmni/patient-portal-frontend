import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import "@testing-library/jest-dom/extend-expect";

test("renders navbar container", () => {
  render(<Navbar />);
  const navbarContainer = screen.getByTestId("navbar-container");
  expect(navbarContainer).toBeInTheDocument();
});
