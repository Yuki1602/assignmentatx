import { add } from "./simpleCalc";

describe("Simple String Calculator", () => {
  test("should pass if function returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
});
