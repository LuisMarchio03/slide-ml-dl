# 🧠 Apresentação: Redes Neurais - Dos Fundamentos à Prática

Uma apresentação interativa e animada sobre a evolução das redes neurais, criada com React, TypeScript e Framer Motion.

## ✨ Características

- **🎨 Animações Fluidas**: Transições suaves entre slides usando Framer Motion
- **🎯 Visualizações Interativas**: Cada conceito teórico é seguido por exemplos práticos animados
- **⌨️ Controles Intuitivos**: Navegação por teclado e mouse
- **📱 Responsivo**: Adaptado para diferentes tamanhos de tela
- **🚀 Performance**: Construído com Vite para carregamento rápido

## 📋 Conteúdo da Apresentação

### 1. **Introdução** (30s)
- Evolução das redes neurais
- Dos fundamentos às aplicações práticas

### 2. **Perceptron (1958)** (60s)
- Primeiro modelo prático
- Classificador linear
- Limitações com problemas não-lineares
- **Exemplo Prático**: Classificação de frutas por peso

### 3. **Adaline (1960)** (25s)
- Refinamento do aprendizado
- Regra Delta

### 4. **MLP - Multilayer Perceptron (anos 80)** (75s)
- Revolução multicamadas
- Algoritmo de backpropagation
- **Exemplo Prático**: Previsão de prática esportiva com múltiplas variáveis

### 5. **RBF - Funções Radiais** (30s)
- Abordagem diferente com funções radiais
- **Exemplo Prático**: Reconhecimento de padrões locais

### 6. **Redes Recorrentes** (40s)
- Introdução da memória
- Aplicações em séries temporais
- **Exemplo Prático**: Análise de sequência temporal

### 7. **Redes Auto-organizáveis** (35s)
- Mapas de Kohonen (SOM)
- Aprendizado não supervisionado
- **Exemplo Prático**: Agrupamento automático de dados

### 8. **Conclusão** (25s)
- Resumo da evolução
- Diversidade como força das redes neurais modernas

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ (recomendado 20.19+ ou 22.12+)
- npm ou yarn

### Instalação e Execução

```bash
# Entre no diretório
cd Slides

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev

# Ou compile para produção
npm run build
```

## 🎮 Controles da Apresentação

### Teclado
- **← →** - Navegar entre slides
- **Espaço** - Próximo slide
- **Esc** - Parar apresentação automática

### Mouse
- **Botões de navegação** - Anterior/Próximo
- **Indicadores** - Ir diretamente para um slide
- **Play/Pause** - Controlar apresentação automática

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca para interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool moderna
- **Framer Motion** - Animações fluidas
- **React Icons** - Ícones consistentes
- **CSS Grid/Flexbox** - Layout responsivo

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Presentation.tsx          # Componente principal da apresentação
│   └── visualizations/           # Visualizações interativas
│       ├── PerceptronVisualization.tsx
│       ├── MLPVisualization.tsx
│       ├── RNNVisualization.tsx
│       ├── RBFVisualization.tsx
│       └── SOMVisualization.tsx
├── data/
│   └── slidesData.ts            # Dados dos slides
├── styles/
│   └── presentation.css         # Estilos da apresentação
├── types/
│   └── index.ts                 # Definições de tipos
└── App.tsx                      # Componente raiz
```

**Duração Total da Apresentação**: ~4 minutos  
**Criado com**: ❤️ React + TypeScript + Framer Motion
