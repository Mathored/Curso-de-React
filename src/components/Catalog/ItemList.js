import React from 'react';
import { Item } from './Item';

export const ItemList = (producto) => {
  return <div>
          {productos.map((producto) => (
          <Item key = {producto.id} producto = {producto}/>
        ))}
  </div>;
};


export const productos = [
  {
    id: 0,
    name: "Oreo",
    description: "Galletitas oreo",
    price: 150,
  }, 
  {
    id: 1,
    name: "Alfajor Jorgito",
    description: "El alfajor de siempre",
    price: 75,
  },
  {
    id: 2,
    name: "Nutella",
    description: "La mejor crema de avellanas. 125 grs",
    price: 250
  }, 
  {
    id: 3,
    name: "Mantecol",
    description: "El clásico navideño",
    price: 200
  },
];


export function getProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(productos), 5000);
  });
}