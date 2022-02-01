import './App.css';
import { useEffect } from 'react';
import {NavBar} from './components/NavBar/NavBar';
import { ItemList, getProductos } from './components/Catalog/ItemList';
import { useState } from 'react/cjs/react.production.min';



function App() {
  const [producto, setProducts]= useState([]);

  useEffect (()=>{
    getProductos()
    .then((data) => {
      setProducts(data)
      console.log(producto);
    }) 
    .catch((error)=>console.error(error));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <section className='App-section'>
        <ItemList/>
      </section>
    </div>
  );
}

export default App;
