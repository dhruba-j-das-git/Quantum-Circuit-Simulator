import { Complex } from 'mathjs';

export interface StateAnalysis {
  probability0: number;
  probability1: number;
  phase: number;
  isSuper: boolean;
}

export const analyzeState = (alpha: Complex, beta: Complex): StateAnalysis => {
  const probability0 = Math.pow(alpha.re, 2) + Math.pow(alpha.im, 2);
  const probability1 = Math.pow(beta.re, 2) + Math.pow(beta.im, 2);
  const phase = Math.atan2(beta.im, beta.re) - Math.atan2(alpha.im, alpha.re);
  
  // State is in superposition if both probabilities are significantly non-zero
  const isSuper = probability0 > 0.01 && probability1 > 0.01;

  return {
    probability0,
    probability1,
    phase,
    isSuper
  };
};