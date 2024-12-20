interface IReel {
  calculateRatio(): number;
}

class Reel implements IReel {
  private coverage: number;
  private click: number;
  private description: string;

  constructor(coverage: number, click: number, description: string) {
    this.coverage = coverage;
    this.click = click;
    this.description = description;
  }

  calculateRatio(): number {
    return (this.click / this.coverage) * 100;
  }
}

export default Reel;
