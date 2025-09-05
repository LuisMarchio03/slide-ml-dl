import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface DataPoint {
  weight: number;
  label: 'Maçã' | 'Laranja';
  color: string;
  id: number;
}

export const PerceptronVisualization: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPoint, setSelectedPoint] = useState<number>(-1);

  const dataPoints: DataPoint[] = [
    { id: 0, weight: 150, label: 'Maçã', color: '#ff6b6b' },
    { id: 1, weight: 180, label: 'Maçã', color: '#ff6b6b' },
    { id: 2, weight: 120, label: 'Maçã', color: '#ff6b6b' },
    { id: 3, weight: 250, label: 'Laranja', color: '#ffa500' },
    { id: 4, weight: 280, label: 'Laranja', color: '#ffa500' },
    { id: 5, weight: 320, label: 'Laranja', color: '#ffa500' },
  ];

  const steps = [
    {
      title: "1. Dados de Entrada",
      description: "Temos frutas com diferentes pesos. Objetivo: classificar automaticamente!",
      showPoints: true,
      showLine: false,
      showPerceptron: false,
      showProcess: false,
      showResult: false
    },
    {
      title: "2. O Perceptron",
      description: "Um neurônio artificial que aprende a separar os dados",
      showPoints: true,
      showLine: false,
      showPerceptron: true,
      showProcess: false,
      showResult: false
    },
    {
      title: "3. Processo de Decisão",
      description: "Para cada fruta: Peso × 1 - 200. Se resultado > 0 → Laranja, senão → Maçã",
      showPoints: true,
      showLine: false,
      showPerceptron: true,
      showProcess: true,
      showResult: false
    },
    {
      title: "4. Linha de Separação",
      description: "O Perceptron cria uma linha de decisão em 200g",
      showPoints: true,
      showLine: true,
      showPerceptron: true,
      showProcess: true,
      showResult: false
    },
    {
      title: "5. Resultado Final",
      description: "Classificação perfeita! Mas só funciona quando os dados são linearmente separáveis",
      showPoints: true,
      showLine: true,
      showPerceptron: true,
      showProcess: true,
      showResult: true
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const resetDemo = () => {
    setCurrentStep(0);
    setSelectedPoint(-1);
  };

  const testPoint = (pointId: number) => {
    setSelectedPoint(pointId);
  };

  const calculateOutput = (weight: number) => {
    return weight > 200 ? 1 : 0;
  };

  const step = steps[currentStep];

  return (
    <div className="visualization-container">
      {/* Controles da demonstração */}
      <div className="demo-controls">
        <div className="step-info">
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
        <div className="control-buttons">
          <button 
            className="step-btn"
            onClick={nextStep}
            disabled={currentStep >= steps.length - 1}
          >
            Próxima Etapa →
          </button>
          <button 
            className="reset-btn"
            onClick={resetDemo}
          >
            ↻ Reiniciar
          </button>
        </div>
      </div>

      <div className="chart-area">
        {/* Gráfico dos dados */}
        <div className="chart">
          <div className="axis">
            <span className="axis-label">Peso (gramas)</span>
            <div className="scale">
              {[100, 150, 200, 250, 300, 350].map(val => (
                <motion.div 
                  key={val} 
                  className="scale-mark"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: step.showPoints ? 1 : 0 }}
                  transition={{ delay: val / 200 }}
                >
                  {val}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pontos de dados */}
          {step.showPoints && (
            <div className="data-points">
              {dataPoints.map((point, index) => (
                <motion.div
                  key={point.id}
                  className={`data-point ${selectedPoint === point.id ? 'selected' : ''}`}
                  style={{ 
                    backgroundColor: point.color,
                    left: `${(point.weight - 100) / 250 * 100}%`
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: selectedPoint === point.id ? 1.3 : 1,
                    opacity: 1 
                  }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => testPoint(point.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="point-label">{point.label}</span>
                  <span className="point-weight">{point.weight}g</span>
                  {step.showProcess && selectedPoint === point.id && (
                    <motion.div 
                      className="calculation"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div>Cálculo: {point.weight} - 200 = {point.weight - 200}</div>
                      <div>Resultado: {calculateOutput(point.weight)} → {point.label}</div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* Linha de decisão */}
          {step.showLine && (
            <motion.div
              className="decision-line"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="decision-label">Limite: 200g</span>
            </motion.div>
          )}
        </div>

        {/* Diagrama do Perceptron */}
        {step.showPerceptron && (
          <motion.div 
            className="perceptron-diagram"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="perceptron-flow">
              <motion.div 
                className="input-node"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span>Peso</span>
                {selectedPoint >= 0 && (
                  <div className="input-value">
                    {dataPoints[selectedPoint]?.weight}g
                  </div>
                )}
              </motion.div>

              <motion.div 
                className="connection"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="weight-label">×1</span>
              </motion.div>

              <motion.div 
                className="neuron"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="neuron-symbol">Σ</span>
                <span className="threshold">-200</span>
                {step.showProcess && selectedPoint >= 0 && (
                  <div className="neuron-calc">
                    {dataPoints[selectedPoint]?.weight} - 200 = {(dataPoints[selectedPoint]?.weight || 0) - 200}
                  </div>
                )}
              </motion.div>

              <motion.div 
                className="activation"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span>f(x)</span>
                <div className="activation-rule">
                  {"> 0 → 1"}<br/>
                  {"≤ 0 → 0"}
                </div>
              </motion.div>

              <motion.div 
                className="output"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <span>Classificação</span>
                {selectedPoint >= 0 && (
                  <div className="output-value">
                    {calculateOutput(dataPoints[selectedPoint]?.weight || 0)} → {dataPoints[selectedPoint]?.label}
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Explicação e resultados */}
        {step.showResult && (
          <motion.div 
            className="results-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="accuracy">
              <h4>✅ Acurácia: 100%</h4>
              <p>Todas as frutas foram classificadas corretamente!</p>
            </div>
            
            <div className="limitations">
              <h4>⚠️ Limitações do Perceptron:</h4>
              <ul>
                <li>Só resolve problemas <strong>linearmente separáveis</strong></li>
                <li>Não consegue aprender XOR (OU Exclusivo)</li>
                <li>Limitado a classificação binária simples</li>
                <li>Uma única linha/plano de separação</li>
              </ul>
            </div>
            
            <div className="next-evolution">
              <p><strong>Próxima evolução:</strong> Multilayer Perceptron (MLP) resolve essas limitações!</p>
            </div>
          </motion.div>
        )}

        {/* Instruções interativas */}
        {step.showPoints && (
          <div className="interaction-hint">
            <p>💡 Clique nos pontos para ver o cálculo em tempo real!</p>
          </div>
        )}
      </div>
    </div>
  );
};
