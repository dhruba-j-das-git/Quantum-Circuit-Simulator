import React, { useState } from 'react';
import { Qubit } from './lib/qubit';
import { hadamardGate, pauliXGate, pauliZGate } from './lib/gates';
import { QuantumCircuit } from './lib/circuit';
import { QubitDisplay } from './components/QubitDisplay';
import { QuantumCircuitControls } from './components/QuantumCircuitControls';
import { GateAnimation } from './components/GateAnimation';

function App() {
  const [circuit] = useState(() => new QuantumCircuit(1));
  const [measurementResult, setMeasurementResult] = useState<number | undefined>();
  const [activeGate, setActiveGate] = useState<string | null>(null);

  const applyGateWithAnimation = (gate: (q: Qubit) => Qubit, gateName: string) => {
    setActiveGate(gateName);
    setTimeout(() => {
      circuit.applyGate(gate, 0);
      setMeasurementResult(undefined);
      setActiveGate(null);
    }, 800);
  };

  const handleHadamard = () => {
    applyGateWithAnimation(hadamardGate, 'Hadamard Gate');
  };

  const handlePauliX = () => {
    applyGateWithAnimation(pauliXGate, 'Pauli-X Gate');
  };

  const handlePauliZ = () => {
    applyGateWithAnimation(pauliZGate, 'Pauli-Z Gate');
  };

  const handleMeasure = () => {
    setActiveGate('Measurement');
    setTimeout(() => {
      const result = circuit.measure()[0];
      setMeasurementResult(result);
      setActiveGate(null);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-2">
          Quantum Circuit Simulator
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Explore quantum computing concepts interactively
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Quantum Gates</h2>
            <QuantumCircuitControls
              onHadamard={handleHadamard}
              onPauliX={handlePauliX}
              onPauliZ={handlePauliZ}
              onMeasure={handleMeasure}
            />
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Quantum State Visualization</h2>
            <QubitDisplay
              state={circuit.getState()[0].getState()}
              measurementResult={measurementResult}
            />
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Quantum Gates</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>The <span className="font-medium text-blue-600">Hadamard gate</span> creates a superposition state</li>
                <li>The <span className="font-medium text-green-600">Pauli-X gate</span> flips the qubit (like classical NOT)</li>
                <li>The <span className="font-medium text-purple-600">Pauli-Z gate</span> adds a phase difference</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Visualization</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Bloch sphere shows the quantum state geometrically</li>
                <li>State analysis provides probabilities and phase information</li>
                <li>Measurement collapses the quantum state to |0⟩ or |1⟩</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <GateAnimation
        gateName={activeGate || ''}
        isAnimating={activeGate !== null}
      />
    </div>
  );
}

export default App;