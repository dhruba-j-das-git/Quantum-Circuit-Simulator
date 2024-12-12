import { Complex, complex, multiply } from 'mathjs';
import { Qubit } from './qubit';

export const hadamardGate = (qubit: Qubit): Qubit => {
  const [alpha, beta] = qubit.getState();
  const factor = 1 / Math.sqrt(2);
  
  const newAlpha = complex(
    factor * (alpha.re + beta.re),
    factor * (alpha.im + beta.im)
  );
  
  const newBeta = complex(
    factor * (alpha.re - beta.re),
    factor * (alpha.im - beta.im)
  );

  return new Qubit(newAlpha, newBeta);
};

export const pauliXGate = (qubit: Qubit): Qubit => {
  const [alpha, beta] = qubit.getState();
  return new Qubit(beta, alpha);
};

export const pauliZGate = (qubit: Qubit): Qubit => {
  const [alpha, beta] = qubit.getState();
  return new Qubit(alpha, complex(-beta.re, -beta.im));
};