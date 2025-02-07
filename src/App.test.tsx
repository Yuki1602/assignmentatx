import { fireEvent, render, screen } from "@testing-library/react";
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

test("calculates sum correctly when triggered", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Enter numbers...");
  const button = screen.getByText(/Calculate/i);
  
  fireEvent.change(input, { target: { value: "1,2,3" } });
  fireEvent.click(button);
  
  expect(screen.getByText("Result: 6")).toBeInTheDocument();
});