export interface SlideData {
  id: number;
  title: string;
  type: 'intro' | 'explanation' | 'practical' | 'conclusion';
  content: string[];
  practicalExample?: {
    title: string;
    description: string;
    visualization: React.ComponentType;
  };
  duration?: string;
  animations?: {
    entrance: string;
    elements: string[];
  };
}

export interface NeuralNetworkVisualization {
  nodes: Node[];
  connections: Connection[];
  type: 'perceptron' | 'mlp' | 'rnn' | 'rbf' | 'hopfield' | 'som';
}

export interface Node {
  id: string;
  x: number;
  y: number;
  label?: string;
  type: 'input' | 'hidden' | 'output';
  isActive?: boolean;
}

export interface Connection {
  from: string;
  to: string;
  weight?: number;
  isActive?: boolean;
}
