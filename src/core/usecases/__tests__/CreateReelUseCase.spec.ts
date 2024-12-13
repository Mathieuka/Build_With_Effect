import { describe, expect, test } from "vitest";
import CreateReelUseCase from "../createReelUseCase";
import { Effect } from "effect";
import ReelRepository from "../../domain/repositories/ReelRepository";
import InMemoryReelRepository from "../../../infra/InMemoryReelRepository";

describe("CreateReelUseCase", () => {
  test("Create a new reel", () => {
    const repo: ReelRepository = new InMemoryReelRepository();
    const createReelUseCase = new CreateReelUseCase(repo);
    const program = createReelUseCase.execute({
      coverage: 100,
      click: 10,
    });

    const id = Effect.runSync(program);

    expect(id).toEqual(0);

    expect(repo.list()).toEqual([
      {
        click: 10,
        coverage: 100,
      },
    ]);
  });
});
