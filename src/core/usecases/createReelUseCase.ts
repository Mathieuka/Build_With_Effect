import { Effect } from "effect";
import ReelRepository from "../domain/repositories/ReelRepository";
import Reel from "../domain";

export interface UseCase<Request, Response, Error> {
  execute(request?: Request): Effect.Effect<Response, Error>;
}

type CreateReelRequest = {
  coverage: number;
  click: number;
  description: string;
};

class CreateReelUseCase implements UseCase<CreateReelRequest, number, string> {
  constructor(private reelRepository: ReelRepository) {}

  execute(request: CreateReelRequest) {
    return Effect.gen(this, function* () {
      if (!request.description.length) {
        yield* Effect.fail("Can't create a reel without description");
      }

      const reel = new Reel(
        request.coverage,
        request.click,
        request.description,
      );

      return this.reelRepository.create(reel);
    });
  }
}

export default CreateReelUseCase;
