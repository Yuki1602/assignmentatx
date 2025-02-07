import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders calculator title", () => {
  render(<App />);
  expect(screen.getByText(/String Calculator/i)).toBeInTheDocument();
});

test("renders input field", () => {
  render(<App />);
  expect(screen.getByPlaceholderText("Enter numbers...")).toBeInTheDocument();
});

test("renders calculate button", () => {
  render(<App />);
  expect(screen.getByText("Calculate")).toBeInTheDocument();
});

test("renders result area", () => {
  render(<App />);
  expect(screen.getByText("Result:")).toBeInTheDocument();
});
