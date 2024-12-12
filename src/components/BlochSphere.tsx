import React, { useEffect, useRef } from 'react';
import { Complex } from 'mathjs';
import { getBlochCoordinates } from '../utils/blochSphere';

interface BlochSphereProps {
  state: [Complex, Complex];
}

export const BlochSphere: React.FC<BlochSphereProps> = ({ state }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [alpha, beta] = state;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const coords = getBlochCoordinates(alpha, beta);
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw sphere
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 80, 0, 2 * Math.PI);
    ctx.strokeStyle = '#333';
    ctx.stroke();

    // Draw state vector
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const scale = 80;
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(
      centerX + coords.x * scale,
      centerY - coords.z * scale
    );
    ctx.strokeStyle = '#0066cc';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw axes
    ctx.strokeStyle = '#999';
    ctx.lineWidth = 1;
    
    // Z axis
    ctx.beginPath();
    ctx.moveTo(centerX, centerY + scale);
    ctx.lineTo(centerX, centerY - scale);
    ctx.stroke();
    
    // X axis
    ctx.beginPath();
    ctx.moveTo(centerX - scale, centerY);
    ctx.lineTo(centerX + scale, centerY);
    ctx.stroke();

  }, [state]);

  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={200}
      className="bg-white rounded-lg shadow-inner"
    />
  );
};