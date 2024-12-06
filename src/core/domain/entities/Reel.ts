interface IReel {
  calculateRatio(): number;
}

class Reel implements IReel {
  private coverage: number;
  private click: number;

  constructor(coverage: number, click: number) {
    this.coverage = coverage;
    this.click = click;
  }

  calculateRatio(): number {
    return (this.click / this.coverage) * 100;
  }
}

export default Reel;
