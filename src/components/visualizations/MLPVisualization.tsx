import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Person {
  age: number;
  sleep: number;
  nutrition: number;
  name: string;
}

export const MLPVisualization: React.FC = () => {


  return (
    <div className="mlp-visualization">

      <img src="/mlp_diagram.jfif" alt="Diagrama de MLP" style={{ maxWidth: '100%', height: 'auto' }} />
   
    </div>
  );
};
