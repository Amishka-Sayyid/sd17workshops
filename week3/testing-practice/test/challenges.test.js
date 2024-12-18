import { test, expect } from "vitest";
import { division } from "./challenges.js";

test("division function divides two numbers", function () {
  const result = division(8, 2);
  const expected = 4;
  expect(result).toBe(expected);
});
