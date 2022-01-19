import React from 'react'
import CartWidget from './CartWidget';
import styles from './NavBar.css' 

export const NavBar = () => {
    return (
        <div className='Nav-bar'>
            <ul className='Ul-nav'>
                <li>Categorías</li>
                <li>Ofertas</li>
                <li>Mis favoritos</li>
                <li>Mis compras</li>
                <CartWidget/>
            </ul>
        </div>
    )
}