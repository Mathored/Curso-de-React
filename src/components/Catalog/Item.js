export function Item ({ producto }) {
  const cardStyles = { border: "1px solid red", width: 300 };

  return (
    <div style={cardStyles}>
      <p>Nombre: {producto.name}</p>
      <p>Descripcion: {producto.description}</p>
      <p>Precio: {producto.price}</p>
    </div>
  );
};
