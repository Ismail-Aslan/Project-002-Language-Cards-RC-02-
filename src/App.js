import react from './assets/react.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <img className="header-logo"  src={react} alt="react logo" />
      </div>
      
      <div className="main">
        <h1 className="main-heading">Languages</h1>

      </div>
    </div>
  );
}

export default App;
