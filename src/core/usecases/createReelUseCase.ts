import { Effect } from "effect";
import Reel from "../domain";
import ReelRepository from "../domain/repositories/ReelRepository";

export interface UseCase<Request, Response, Error> {
  execute(request?: Request): Effect.Effect<Response, Error>;
}

type CreateReelRequest = {
  coverage: number;
  click: number;
};

class CreateReelUseCase implements UseCase<CreateReelRequest, number, never> {
  constructor(private reelRepository: ReelRepository) {}

  execute(request: CreateReelRequest): Effect.Effect<number> {
    const reel = new Reel(request.coverage, request.click);

    return Effect.succeed(this.reelRepository.create(reel));
  }
}

export default CreateReelUseCase;
