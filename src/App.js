import './App.css';
import { useEffect, useState } from 'react';
import {NavBar} from './components/NavBar/NavBar';
import {getProductos} from "./components/Catalog/ItemList"
import Item from './components/Item';


function App() {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProductos()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <section className='App-section'>

      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        products.map((product) => <Item key={product.id} product={product} />)
      )}
      </section>
    </div>
  );
}

export default App;
