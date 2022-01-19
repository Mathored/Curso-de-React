import './App.css';
import ItemListContainer from './components/Catalog/ItemListContainer';
import {NavBar} from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <section className='App-section'>
        <ItemListContainer/>
      </section>
    </div>
  );
}

export default App;
