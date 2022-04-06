import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
  return (
    <header className='header'>

        <div className="container-navbar">


              <NavLink to="/" className="logo">ShoppingList<span>TEST.</span></NavLink>

              <nav className="navbar">
                  <NavLink className={ ({isActive}) => (isActive ? 'actives' : '')} to="/">Lista Hogar</NavLink>
                  <NavLink className={ ({isActive}) => (isActive ? 'actives' : '')} to="/agregarProducto">Agregar Producto</NavLink>
                  <NavLink className={ ({isActive}) => (isActive ? 'actives' : '')} to="/listaDeCompras">Lista de compras</NavLink>
              </nav>

              <NavLink to="/contact" className="link-btn">Contáctanos</NavLink>


        </div>

    </header>
  )
}
