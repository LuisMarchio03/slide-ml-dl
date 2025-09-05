import type { SlideData } from '../types';
import { PerceptronVisualization } from '../components/visualizations/PerceptronVisualization';
import { MLPVisualization } from '../components/visualizations/MLPVisualization';

export const slidesData: SlideData[] = [
  {
    id: 0,
    title: "Machine Learning e Redes Neurais: Fundamentos e Aplicações",
    type: "intro",
    content: [
      "Hoje veremos como os conceitos de aprendizado de máquina evoluem até aplicações práticas de redes neurais",
      "em problemas reais de engenharia, ciência e sociedade.",
      "Uma jornada pelos fundamentos e aplicações que transformam dados em conhecimento."
    ],
    duration: "30s"
  },
  {
    id: 1,
    title: "Machine Learning: Transformando Dados em Conhecimento",
    type: "explanation",
    content: [
      "🧠 Não é programação explícita → o modelo aprende padrões por si mesmo",
      "📊 Aplicações em CLASSIFICAÇÃO: spam vs. não-spam, detecção de fraudes",
      "📈 Aplicações em REGRESSÃO: previsão de preços, estimativas de demanda",
      "🔮 Aplicações em PREDIÇÃO: próximas palavras, comportamentos futuros",
      "👁️ Aplicações em VISÃO COMPUTACIONAL: reconhecimento facial, detecção de objetos",
      "💬 Aplicações em PROCESSAMENTO DE LINGUAGEM NATURAL: tradução, chatbots"
    ],
    duration: "60s"
  },
  {
    id: 2,
    title: "Tipos de Aprendizado de Máquina",
    type: "explanation",
    content: [
      "🏷️ SUPERVISIONADO → aprende com exemplos rotulados (ex.: detectar fraude)",
      "🔍 NÃO SUPERVISIONADO → descobre padrões sem rótulos (ex.: segmentar clientes)",
      "🎮 REFORÇO → aprende por tentativa/erro e recompensas (ex.: robótica, jogos)"
    ],
    duration: "45s"
  },
  {
    id: 3,
    title: "O Papel dos Dados",
    type: "explanation",
    content: [
      "⚖️ Qualidade dos dados = qualidade do modelo",
      "🧹 PRÉ-PROCESSAMENTO → limpeza, normalização, balanceamento",
      "⚠️ OVERFITTING: modelo memoriza dados em vez de generalizar",
      "⚠️ UNDERFITTING: modelo simplifica demais e não captura padrões importantes"
    ],
    duration: "60s"
  },
  {
    id: 4,
    title: "Técnicas e Modelos Tradicionais",
    type: "explanation",
    content: [
      "🔍 CLASSIFICAÇÃO: KNN, Árvores de Decisão",
      "📈 REGRESSÃO: Linear, Ridge, Lasso",
      "🔮 AGRUPAMENTO: K-means, SOM (Self-Organizing Maps)",
      "✅ VALIDAÇÃO: treino/validação/teste, k-fold cross validation"
    ],
    duration: "60s"
  },
  {
    id: 5,
    title: "Perceptron - O Primeiro Marco (1958)",
    type: "explanation",
    content: [
      "🧠 Criado por Frank Rosenblatt em 1958 - primeiro neurônio artificial prático",
      "⚡ Funciona como um interruptor inteligente: liga (1) ou desliga (0)",
      "🔢 Processo simples: Entrada × Peso + Bias → Se resultado > 0 então 1, senão 0",
      "📊 Classificador LINEAR - consegue separar dados com uma linha reta",
      "✅ Revolucionário para sua época: aprendizado automático de padrões!",
      "❌ LIMITAÇÃO FATAL: não resolve problemas não-lineares como XOR",
      "🧊 Causou o primeiro 'inverno da IA' (1970-1980) devido às limitações",
      "💡 Base para todas as redes neurais modernas"
    ],
    duration: "90s"
  },
  {
    id: 6,
    title: "Perceptron na Prática",
    type: "practical",
    content: [
      "🍎 Exemplo real: Sistema de classificação de frutas por peso",
      "⚖️ Dados: Maçãs geralmente < 200g, Laranjas > 200g", 
      "🎯 Objetivo: Ensinar a máquina a classificar automaticamente",
      "🔧 Interativo: Clique nos pontos para ver os cálculos em tempo real!"
    ],
    practicalExample: {
      title: "Classificando Frutas por Peso",
      description: "Maçãs < 200g | Laranjas > 200g",
      visualization: PerceptronVisualization
    }
  },
  {
    id: 7,
    title: "Adaline - Refinando o Aprendizado (1960)",
    type: "explanation",
    content: [
      "Adaptive Linear Neuron",
      "Similar ao perceptron com melhorias",
      "Introduziu a REGRA DELTA",
      "Ajusta pesos minimizando erro médio quadrático",
      "Primeiro passo para treinamento matematicamente fundamentado"
    ],
    duration: "25s"
  },
  {
    id: 8,
    title: "MLP - A Revolução Multicamadas (anos 80)",
    type: "explanation",
    content: [
      "🧠 Multilayer Perceptron - a grande virada da IA!",
      "🔗 Adicionou CAMADAS OCULTAS entre entrada e saída",
      "⚡ Algoritmo de BACKPROPAGATION para treinar toda a rede",
      "🧩 Resolveu a limitação fatal do perceptron: problemas não-lineares!",
      "🎯 Cada camada oculta aprende representações mais abstratas",
      "📈 Consegue modelar relações complexas e padrões sutis",
      "🚀 Base do APRENDIZADO PROFUNDO e IA moderna",
      "💡 Revolução: de uma linha reta para formas complexas de decisão"
    ],
    duration: "90s"
  },
  {
    id: 9,
    title: "MLP na Prática",
    type: "practical",
    content: [
      "🏃‍♂️ Exemplo: Sistema inteligente de recomendação de exercícios",
      "📊 Múltiplas entradas: Idade + Horas de sono + Qualidade nutricional",
      "🧠 Camada oculta processa: Saúde + Vitalidade + Energia",
      "🎯 Decisão final: Vai praticar esporte hoje?",
      "⚡ Interativo: Escolha pessoas diferentes e veja como a rede decide!"
    ],
    practicalExample: {
      title: "Previsão de Prática Esportiva",
      description: "Idade + Sono + Alimentação → Disposição/Energia/Motivação → Pratica?",
      visualization: MLPVisualization
    }
  },
  {
    id: 10,
    title: "RBF - Funções Radiais",
    type: "explanation",
    content: [
      "Radial Basis Functions",
      "Abordagem diferente: funções RADIAIS como ativação",
      "Excelente capacidade de aproximação LOCAL",
      "Muito eficazes em reconhecimento de padrões",
      "Sensibilidade espacial"
    ],
    duration: "30s"
  },
  {
    id: 11,
    title: "Redes Recorrentes - Adicionando Memória",
    type: "explanation",
    content: [
      "Introduziram algo revolucionário: MEMÓRIA",
      "Conexões de realimentação",
      "Saída volta como entrada em etapas futuras",
      "Rede de Hopfield: memória associativa",
      "RNNs: fundamentais para SÉRIES TEMPORAIS",
      "Aplicações: previsão do tempo, reconhecimento de voz, análise de texto"
    ],
    duration: "40s"
  },
  {
    id: 12,
    title: "Redes Auto-organizáveis",
    type: "explanation",
    content: [
      "Mapas de Kohonen (SOM)",
      "Trabalham em modo NÃO SUPERVISIONADO",
      "Não precisam de respostas prontas",
      "Organizam dados em clusters",
      "Descobrem padrões ocultos",
      "Variantes: LVQ e ART",
      "Mineração de dados e descoberta de estruturas"
    ],
    duration: "35s"
  },
  {
    id: 13,
    title: "",
    type: "conclusion",
    content: [
    ],
    duration: "25s",
    animations: {
      entrance: 'slide-up',
      elements: ['/patrick.jpg']
    }
  }
];
