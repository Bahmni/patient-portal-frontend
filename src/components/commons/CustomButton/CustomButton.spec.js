import React from "react";
import { render, screen } from "@testing-library/react";
import CustomButton from "./CustomButton";
import "@testing-library/jest-dom/extend-expect";

test("renders custom button", () => {
  render(<CustomButton />);
  const btnContainer = screen.getByTestId("custom-btn");
  expect(btnContainer).toBeInTheDocument();
});
