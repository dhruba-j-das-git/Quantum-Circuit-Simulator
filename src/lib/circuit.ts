import { Qubit } from './qubit';

export class QuantumCircuit {
  private qubits: Qubit[];

  constructor(numQubits: number) {
    this.qubits = Array(numQubits).fill(null).map(() => new Qubit());
  }

  applyGate(gate: (q: Qubit) => Qubit, qubitIndex: number): void {
    if (qubitIndex >= 0 && qubitIndex < this.qubits.length) {
      this.qubits[qubitIndex] = gate(this.qubits[qubitIndex]);
    }
  }

  measure(): number[] {
    return this.qubits.map(qubit => qubit.measure());
  }

  getState(): Qubit[] {
    return [...this.qubits];
  }
}