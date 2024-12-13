import Reel from "../entities";

interface ReelRepository {
  create(reel: Reel): number;
  list(): Reel[];
}

export default ReelRepository;
