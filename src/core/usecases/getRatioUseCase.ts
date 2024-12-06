import { Effect } from "effect";
import Reel from "../domain";
import { UseCase } from "./createReelUseCase";

type GetRatioRequest = {
  id: string;
};

class CreateReelUseCase implements UseCase<GetRatioRequest, number, never> {
  execute(request: GetRatioRequest): Effect.Effect<number> {
    // get reel from database
    const reel = {
      id: request.id,
      coverage: 100,
      click: 10,
    };

    const reelInstance = new Reel(reel.coverage, reel.click);

    return Effect.succeed(reelInstance.calculateRatio());
  }
}

export default CreateReelUseCase;
