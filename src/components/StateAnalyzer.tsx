import React from 'react';
import { Complex } from 'mathjs';
import { analyzeState } from '../utils/stateAnalysis';

interface StateAnalyzerProps {
  state: [Complex, Complex];
}

export const StateAnalyzer: React.FC<StateAnalyzerProps> = ({ state }) => {
  const [alpha, beta] = state;
  const analysis = analyzeState(alpha, beta);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="text-sm text-blue-700 font-medium">|0⟩ Probability</div>
          <div className="text-lg font-bold text-blue-900">
            {(analysis.probability0 * 100).toFixed(1)}%
          </div>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <div className="text-sm text-green-700 font-medium">|1⟩ Probability</div>
          <div className="text-lg font-bold text-green-900">
            {(analysis.probability1 * 100).toFixed(1)}%
          </div>
        </div>
      </div>

      <div className="bg-purple-50 p-3 rounded-lg">
        <div className="text-sm text-purple-700 font-medium">Phase Difference</div>
        <div className="text-lg font-bold text-purple-900">
          {(analysis.phase * 180 / Math.PI).toFixed(1)}°
        </div>
      </div>

      <div className="bg-gray-50 p-3 rounded-lg">
        <div className="text-sm text-gray-700 font-medium">State Type</div>
        <div className="text-lg font-bold text-gray-900">
          {analysis.isSuper ? 'Superposition' : 'Basis State'}
        </div>
      </div>
    </div>
  );
};