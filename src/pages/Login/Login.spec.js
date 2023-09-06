import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";
import { AuthContextProvider } from "../../context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

test("renders login container", () => {
  render(
    <MemoryRouter>
      <AuthContextProvider>
        <Login />
      </AuthContextProvider>
    </MemoryRouter>
  );
  const loginContainer = screen.getByTestId("login-container");
  expect(loginContainer).toBeInTheDocument();
});
