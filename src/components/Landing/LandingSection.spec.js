import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LandingSection from "./LandingSection";
import "@testing-library/jest-dom/extend-expect";

test("renders landing section container", () => {
  render(
    <MemoryRouter>
      {" "}
      {/* Wrap your component in MemoryRouter */}
      <LandingSection />
    </MemoryRouter>
  );
  const landingSectionContainer = screen.getByTestId(
    "landing-section-container"
  );
  expect(landingSectionContainer).toBeInTheDocument();
});

test("validates input for alphanumeric value for desktop", () => {
  render(
    <MemoryRouter>
      {" "}
      {/* Wrap your component in MemoryRouter */}
      <LandingSection />
    </MemoryRouter>
  );
  const input = screen.getByTestId("text-input-desktop");
  expect(input).toBeInTheDocument();
});

test("validates input for alphanumeric value for mobile", () => {
  render(
    <MemoryRouter>
      {" "}
      {/* Wrap your component in MemoryRouter */}
      <LandingSection />
    </MemoryRouter>
  );
  const input = screen.getByTestId("text-input-mobile");
  expect(input).toBeInTheDocument();
});

test("handles click event on Get OTP button", () => {
  render(
    <MemoryRouter>
      {" "}
      {/* Wrap your component in MemoryRouter */}
      <LandingSection />
    </MemoryRouter>
  );
  const getOTPButton = screen.getAllByTestId("custom-btn");
  expect(getOTPButton).toHaveLength(2);
});
