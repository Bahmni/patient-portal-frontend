import React from "react";
import { render, screen } from "@testing-library/react";
import Toaster from "./Toaster";
import "@testing-library/jest-dom/extend-expect";

test("renders toaster notification", () => {
  render(<Toaster />);
  const toaster = screen.getByTestId("toaster-notification");
  expect(toaster).toBeInTheDocument();
});
