import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {

  const [toggleNav, settoggleNav] = useState(false);


  return (
    <header className='header'>

        <div className="container-navbar">


              <NavLink to="/" className="logo">ShoppingList<span>TEST.</span></NavLink>

              <nav className="navbar">
                  <NavLink className={ ({isActive}) => (isActive ? 'actives' : '')} to="/">Lista Hogar</NavLink>
                  <NavLink className={ ({isActive}) => (isActive ? 'actives' : '')} to="/agregarProducto">Agregar Producto</NavLink>
                  <NavLink className={ ({isActive}) => (isActive ? 'actives' : '')} to="/listaDeCompras">Lista de compras</NavLink>
              </nav>


              <div  className='button-nav'>
                  <i onClick={ () => settoggleNav(!toggleNav)} className='fa-solid fa-bars'></i>
              </div>


        </div>

        <nav className={ (toggleNav ) ? "navbar-responsive showmenu" : "navbar-responsive"}>
              <NavLink className={ ({isActive}) => (isActive ? 'actives' : '')} to="/">Lista Hogar</NavLink>
              <NavLink className={ ({isActive}) => (isActive ? 'actives' : '')} to="/agregarProducto">Agregar Producto</NavLink>
              <NavLink className={ ({isActive}) => (isActive ? 'actives' : '')} to="/listaDeCompras">Lista de compras</NavLink>
        </nav>

    </header>
  )
}
