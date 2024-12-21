import { Effect } from "effect";
import ReelRepository from "../domain/repositories/ReelRepository";
import Reel from "../domain";

export interface UseCase<Request, Response, Error> {
  execute(request?: Request): Effect.Effect<Response, Error>;
}

export class MissingDescriptionError {
  readonly _tag = "MissingDescriptionError";
}

type CreateReelRequest = {
  coverage: number;
  click: number;
  description: string;
};

class CreateReelUseCase
  implements UseCase<CreateReelRequest, number, MissingDescriptionError>
{
  constructor(private reelRepository: ReelRepository) {}

  execute(request: CreateReelRequest) {
    return Effect.gen(this, function* () {
      if (!request.description.length) {
        yield* Effect.fail(new MissingDescriptionError());
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
