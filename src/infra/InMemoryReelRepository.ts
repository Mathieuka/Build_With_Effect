import ReelRepository from "../core/domain/repositories/ReelRepository";
import Reel from "../core/domain";

class InMemoryReelRepository implements ReelRepository {
  reel: Reel[] = [];

  create(reel: Reel): number {
    this.reel.push(reel);
    return 0;
  }

  list(): Reel[] {
    return this.reel;
  }
}

export default InMemoryReelRepository;
