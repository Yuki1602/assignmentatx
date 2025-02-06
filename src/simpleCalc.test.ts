import { add } from "./simpleCalc";

describe("Simple String Calculator", () => {
  test("should pass if function returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should pass if function returns the number itself if only one number is provided", () => {
    expect(add("1")).toBe(1);
  });
});
