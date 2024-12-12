# Quantum Circuit Simulator

An interactive web-based quantum circuit simulator that allows users to explore and understand basic quantum computing concepts through visual representations and real-time state analysis.

![Quantum Circuit Simulator](./public/quantum.svg)

## Features

- **Interactive Quantum Gates**
  - Hadamard Gate (H) - Creates quantum superposition
  - Pauli-X Gate (X) - Quantum equivalent of classical NOT
  - Pauli-Z Gate (Z) - Adds phase difference
  - Measurement - Collapses quantum state

- **Visual State Representation**
  - Bloch Sphere visualization
  - Real-time state vector display
  - Probability analysis
  - Phase information

- **Educational Components**
  - Detailed explanations of quantum operations
  - Visual feedback for gate applications
  - Interactive state analysis

## Technology Stack

- React 18
- TypeScript
- Vite
- TailwindCSS
- Math.js (for complex number calculations)
- Vitest (for testing)

## Getting Started

### Prerequisites

- Node.js 14.18+ or 16+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/quantum-simulator.git
   cd quantum-simulator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Development

### Project Structure

```
quantum-simulator/
├── src/
│   ├── components/         # React components
│   │   ├── BlochSphere.tsx
│   │   ├── GateAnimation.tsx
│   │   ├── QubitDisplay.tsx
│   │   ├── QuantumCircuitControls.tsx
│   │   └── StateAnalyzer.tsx
│   ├── lib/               # Quantum computing logic
│   │   ├── circuit.ts
│   │   ├── gates.ts
│   │   └── qubit.ts
│   ├── utils/             # Utility functions
│   │   ├── blochSphere.ts
│   │   └── stateAnalysis.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── quantum.svg
└── package.json
```

### Running Tests

```bash
npm run test
```

### Building for Production

```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Quantum computing calculations powered by [Math.js](https://mathjs.org/)
- UI components styled with [TailwindCSS](https://tailwindcss.com/)