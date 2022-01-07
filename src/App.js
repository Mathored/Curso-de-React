import logo from './logo.svg';
import './App.css';
import {MiModulo} from './MiModulo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
         ¡Primera clase!
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MiModulo/>
    </div>
  );
}

export default App;
