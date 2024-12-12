import { expect, test } from 'vitest';
import { Qubit } from '../qubit';
import { hadamardGate, pauliXGate, pauliZGate } from '../gates';
import { complex } from 'mathjs';

test('hadamard gate creates superposition', () => {
  const qubit = new Qubit(complex(1, 0), complex(0, 0));
  const result = hadamardGate(qubit);
  const [alpha, beta] = result.getState();
  
  expect(alpha.re).toBeCloseTo(1 / Math.sqrt(2));
  expect(beta.re).toBeCloseTo(1 / Math.sqrt(2));
});

test('pauli-X gate flips qubit state', () => {
  const qubit = new Qubit(complex(1, 0), complex(0, 0));
  const result = pauliXGate(qubit);
  const [alpha, beta] = result.getState();
  
  expect(alpha.re).toBeCloseTo(0);
  expect(beta.re).toBeCloseTo(1);
});