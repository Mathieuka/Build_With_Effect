import { describe, expect, test } from "vitest";
import CreateReelUseCase from "../createReelUseCase";
import { Effect } from "effect";

describe("CreateReelUseCase", () => {
  test("Create a new reel", () => {
    const createReelUseCase = new CreateReelUseCase();
    const program = createReelUseCase.execute({
      coverage: 10,
      click: 10,
    });

    const result = Effect.runSync(program);

    expect(result).toEqual({
      coverage: 10,
      click: 10,
    });
  });
});
