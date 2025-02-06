import { add } from "./simpleCalc";

describe("Simple String Calculator", () => {
  test("should pass if function returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should pass if function returns the number itself if only one number is provided", () => {
    expect(add("1")).toBe(1);
  });

  test("should pass if function returns the sum of two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);  // Test for two numbers
  });

  test("should pass if function returns the sum of multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);  // Test for multiple numbers
  });

  test("should pass if function handles newlines between numbers as well as commas", () => {
    expect(add("1\n2,3")).toBe(6);  // Test for newline handling
  });

  test("should pass if function supports custom delimiter provided at the beginning", () => {
    expect(add("//;\n1;2")).toBe(3);  // Test for custom delimiter
  });

  test("should pass if function throws an exception for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrowError("negatives not allowed: -2");
  });

  test("should pass if function ignores numbers greater than 1000", () => {
    expect(add("2,1001")).toBe(2);
  });

  test("should pass if function handles delimiters of any length", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });

  test("multiple delimiters", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
    expect(add("//[**][%%]\n1**2%%3")).toBe(6);
  });

  test("should handle multiple multi-character delimiters", () => {
    expect(add("//[**][%%]\n1**2%%3")).toBe(6);
    expect(add("//[!!][??]\n5!!3??2")).toBe(10);
    expect(add("//[abc][def]\n1abc2def3")).toBe(6);
  });
});
