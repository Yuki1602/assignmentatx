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
