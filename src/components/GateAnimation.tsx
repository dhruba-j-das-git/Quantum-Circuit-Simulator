import React from 'react';

interface GateAnimationProps {
  gateName: string;
  isAnimating: boolean;
}

export const GateAnimation: React.FC<GateAnimationProps> = ({ gateName, isAnimating }) => {
  return (
    <div className={`
      fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      pointer-events-none transition-opacity duration-500
      ${isAnimating ? 'opacity-100' : 'opacity-0'}
    `}>
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 text-center">
        <div className="text-2xl font-bold text-blue-600 animate-pulse">
          Applying {gateName}
        </div>
        <div className="mt-2 text-gray-600">
          Transforming quantum state...
        </div>
      </div>
    </div>
  );
};