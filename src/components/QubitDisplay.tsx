import React from 'react';
import { Complex } from 'mathjs';
import { BlochSphere } from './BlochSphere';
import { StateAnalyzer } from './StateAnalyzer';

interface QubitDisplayProps {
  state: [Complex, Complex];
  measurementResult?: number;
}

export const QubitDisplay: React.FC<QubitDisplayProps> = ({ state, measurementResult }) => {
  const [alpha, beta] = state;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Bloch Sphere</h3>
          <BlochSphere state={state} />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">State Analysis</h3>
          <StateAnalyzer state={state} />
        </div>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">State Vector</h3>
        <div className="space-y-2 font-mono text-sm">
          <p>α = {alpha.format(4)}</p>
          <p>β = {beta.format(4)}</p>
        </div>
      </div>

      {measurementResult !== undefined && (
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-2 text-red-600">Measurement Result</h3>
          <p className="text-2xl font-bold font-mono">
            |{measurementResult}⟩
          </p>
        </div>
      )}
    </div>
  );
};