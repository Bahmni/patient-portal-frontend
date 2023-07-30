import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";
import "@testing-library/jest-dom/extend-expect";

test("renders login container", () => {
  render(<Login />);
  const loginContainer = screen.getByTestId("login-container");
  expect(loginContainer).toBeInTheDocument();
});
