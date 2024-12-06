import { Effect } from "effect";
import Reel from "../domain";

export interface UseCase<Request, Response, Error> {
  execute(request?: Request): Effect.Effect<Response, Error>;
}

type CreateReelRequest = {
  coverage: number;
  click: number;
};

class CreateReelUseCase implements UseCase<CreateReelRequest, Reel, never> {
  execute(request: CreateReelRequest): Effect.Effect<Reel> {
    const reel = new Reel(request.coverage, request.click);

    return Effect.succeed(reel);
  }
}

export default CreateReelUseCase;
