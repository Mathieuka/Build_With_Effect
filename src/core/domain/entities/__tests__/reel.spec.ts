import { describe, expect, test } from "vitest";
import Reel from "../Reel";

describe("Reel", () => {
  test("Calculate ratio", () => {
    const reel = new Reel(100, 10);
    expect(reel.calculateRatio()).toEqual(10);
  });
});
