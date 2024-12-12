import { Complex, complex, multiply } from 'mathjs';

export class Qubit {
  private alpha: Complex;
  private beta: Complex;

  constructor(alpha: Complex = complex(1, 0), beta: Complex = complex(0, 0)) {
    // Ensure normalization condition |α|² + |β|² = 1
    const norm = Math.sqrt(
      Math.pow(alpha.re, 2) + Math.pow(alpha.im, 2) +
      Math.pow(beta.re, 2) + Math.pow(beta.im, 2)
    );

    this.alpha = complex(alpha.re / norm, alpha.im / norm);
    this.beta = complex(beta.re / norm, beta.im / norm);
  }

  getState(): [Complex, Complex] {
    return [this.alpha, this.beta];
  }

  getProbabilities(): [number, number] {
    return [
      Math.pow(this.alpha.re, 2) + Math.pow(this.alpha.im, 2),
      Math.pow(this.beta.re, 2) + Math.pow(this.beta.im, 2)
    ];
  }

  measure(): 0 | 1 {
    const [prob0] = this.getProbabilities();
    return Math.random() < prob0 ? 0 : 1;
  }
}