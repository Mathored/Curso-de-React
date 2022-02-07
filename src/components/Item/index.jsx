import ItemCount from "./ItemCount";
import styles from "./styles.css"



const Item = ({ product }) => {
    const cardStyles = { border: "1px solid red", width: 300 };
  
    return (
      <div style={cardStyles} className="listContainer">
        <img src={product.img} alt={product.name} />
        <p>Nombre: {product.name}</p>
        <p>Descripcion: {product.description}</p>
        <p>Precio: {product.price}</p>
        <ItemCount/>
      </div>
    );
  };
  
  export default Item;