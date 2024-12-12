import { Complex } from 'mathjs';

export interface BlochCoordinates {
  x: number;
  y: number;
  z: number;
}

export const getBlochCoordinates = (alpha: Complex, beta: Complex): BlochCoordinates => {
  // Convert quantum state to Bloch sphere coordinates
  const theta = 2 * Math.acos(Math.sqrt(Math.pow(alpha.re, 2) + Math.pow(alpha.im, 2)));
  const phi = Math.atan2(beta.im, beta.re);

  return {
    x: Math.sin(theta) * Math.cos(phi),
    y: Math.sin(theta) * Math.sin(phi),
    z: Math.cos(theta)
  };
};