import React from 'react';

interface QuantumCircuitControlsProps {
  onHadamard: () => void;
  onPauliX: () => void;
  onPauliZ: () => void;
  onMeasure: () => void;
}

export const QuantumCircuitControls: React.FC<QuantumCircuitControlsProps> = ({
  onHadamard,
  onPauliX,
  onPauliZ,
  onMeasure,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <button
        onClick={onHadamard}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Apply Hadamard Gate
      </button>
      <button
        onClick={onPauliX}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Apply Pauli-X Gate
      </button>
      <button
        onClick={onPauliZ}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
      >
        Apply Pauli-Z Gate
      </button>
      <button
        onClick={onMeasure}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Measure Qubit
      </button>
    </div>
  );
};