import { Effect } from "effect";

export interface UseCase<Request, Response, Error> {
  execute(request?: Request): Effect.Effect<Response, Error>;
}

type Reel = {
  coverage: number;
  click: number;
};

type CreateReelRequest = {
  coverage: number;
  click: number;
};

class CreateReelUseCase implements UseCase<CreateReelRequest, Reel, never> {
  execute(request: CreateReelRequest): Effect.Effect<Reel> {
    return Effect.succeed({
      click: request.click,
      coverage: request.coverage,
    });
  }
}

export default CreateReelUseCase;
