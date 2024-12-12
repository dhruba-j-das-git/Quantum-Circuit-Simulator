import { expect, test } from 'vitest';
import { Qubit } from '../qubit';
import { complex } from 'mathjs';

test('creates a normalized qubit', () => {
  const qubit = new Qubit(complex(1, 0), complex(1, 0));
  const [alpha, beta] = qubit.getState();
  const [prob0, prob1] = qubit.getProbabilities();
  
  expect(prob0 + prob1).toBeCloseTo(1);
});

test('measures |0⟩ state correctly', () => {
  const qubit = new Qubit(complex(1, 0), complex(0, 0));
  const result = qubit.measure();
  expect(result).toBe(0);
});

test('measures |1⟩ state correctly', () => {
  const qubit = new Qubit(complex(0, 0), complex(1, 0));
  const result = qubit.measure();
  expect(result).toBe(1);
});