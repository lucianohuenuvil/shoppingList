import React, { useContext, useState } from 'react'
import { ListContext } from '../context/ListContext'

export const HomeList = () => {


  const {homelist, sethomelist} = useContext (ListContext);

  const {shoplist, setshoplist} = useContext (ListContext);


  const verdato = (item) =>{

    
    


    if (shoplist.find(object => object.id == item.id)){

      console.log("Producto encontrado");
    }else{
      setshoplist( [...shoplist,item])
      console.log("Producto agregado")
    }

    
    /*
    else{
      
      

    }*/

 
  }


  return (
    <div>
      <h1>  HomeList </h1>

      {
        homelist.map ( item => (
          <p key={item.id} > {item.id} - { item.nombre} - {item.precio} - {item.cantidad} <button onClick={ () => verdato (item)} >Click me</button></p> 
        ))
      }


    </div>

  )
}
