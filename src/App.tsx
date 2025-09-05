import { Presentation } from './components/Presentation';
import { slidesData } from './data/slidesData';
import './styles/presentation.css';

function App() {
  return (
    <div className="App">
      <Presentation slides={slidesData} />
    </div>
  );
}

export default App;
