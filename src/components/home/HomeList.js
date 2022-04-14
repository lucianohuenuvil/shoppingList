import React, { useContext, useState } from 'react'
import { ListContext } from '../context/ListContext'

export const HomeList = () => {


  const {homelist, sethomelist} = useContext (ListContext);

  const {shoplist, setshoplist} = useContext (ListContext);





  const toShoppingList = (item) =>{

       
    if (shoplist.find(object => object.id == item.id)){

      console.log("Producto encontrado");
    }else{
      setshoplist( [...shoplist,item])
      console.log("Producto agregado")
    }
 
  }


  
  const handleDelete = (item) =>{

    if (homelist.filter(object => object.id !== item.id)){
      const newlist = homelist.filter(object => object.id !== item.id)
      console.log("Producto encontrado");
      sethomelist(newlist)
    }else{
      
      console.log("Error")
    }
 
  }





  return (
    <div>
      <h1>  HomeList </h1>

      {
        homelist.map ( item => (
          <p key={item.id} > {item.id} - { item.nombre} - {item.precio} - {item.cantidad} 
          <button onClick={ () => toShoppingList (item)} >Agregar</button>
          <button onClick={ () => toShoppingList (item)} >Modificar</button>
          <button onClick={ () => handleDelete (item)} >Eliminar</button>

          
          </p> 
        ))
      }


    </div>

  )
}
