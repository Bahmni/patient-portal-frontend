import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { AuthContextProvider } from "../../../context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

test("renders navbar container", () => {
  render(
    <MemoryRouter>
      <AuthContextProvider>
        <Navbar />
      </AuthContextProvider>
    </MemoryRouter>
  );
  const navbarContainer = screen.getByTestId("navbar-container");
  expect(navbarContainer).toBeInTheDocument();
});
