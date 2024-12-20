import { beforeEach, describe, expect, test } from "vitest";
import CreateReelUseCase from "../createReelUseCase";
import { Effect } from "effect";
import ReelRepository from "../../domain/repositories/ReelRepository";
import InMemoryReelRepository from "../../../infra/InMemoryReelRepository";

describe("CreateReelUseCase", () => {
  let repo: ReelRepository;
  let createReelUseCase: CreateReelUseCase;

  beforeEach(() => {
    repo = new InMemoryReelRepository();
    createReelUseCase = new CreateReelUseCase(repo);
  });

  test("Create a new reel", () => {
    const program = createReelUseCase.execute({
      coverage: 100,
      click: 10,
      description: "Ma description",
    });

    const id = Effect.runSync(program);

    expect(id).toEqual(0);
    expect(repo.list()).toEqual([
      {
        click: 10,
        coverage: 100,
        description: "Ma description",
      },
    ]);
  });

  test("Can't create a reel without description", () => {
    const program = createReelUseCase.execute({
      coverage: 100,
      click: 10,
      description: "",
    });

    expect(() => Effect.runSync(program)).toThrowError(
      "Can't create a reel without description",
    );
  });
});
