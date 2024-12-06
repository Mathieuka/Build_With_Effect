import { describe, expect, test } from "vitest";
import CreateReelUseCase from "../createReelUseCase";
import { Effect } from "effect";

describe("CreateReelUseCase", () => {
  test("Create a new reel", () => {
    const createReelUseCase = new CreateReelUseCase();
    const program = createReelUseCase.execute({
      coverage: 100,
      click: 10,
    });

    const reel = Effect.runSync(program);

    expect(reel.calculateRatio()).toEqual(10);
  });
});
