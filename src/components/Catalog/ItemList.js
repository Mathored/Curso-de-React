import React from 'react';




export const PRODUCTS = [
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
    setTimeout(() => resolve(PRODUCTS), 2000);
  });
}