import React from "react";
import { render, screen } from "@testing-library/react";
import LandingSection from "./LandingSection";
import "@testing-library/jest-dom/extend-expect";

test("renders landing section container", () => {
  render(<LandingSection />);
  const landingSectionContainer = screen.getByTestId(
    "landing-section-container"
  );
  expect(landingSectionContainer).toBeInTheDocument();
});

test("validates input for alphanumeric value", () => {
  render(<LandingSection />);
  const input = screen.getByLabelText("Enter your hospital ID");
  expect(input).toBeInTheDocument();
});

test("handles click event on Get OTP button", () => {
  render(<LandingSection />);
  const getOTPButton = screen.getByText("Get OTP");
  expect(getOTPButton).toBeInTheDocument();
});
