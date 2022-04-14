import React, { useContext, useState } from 'react'
import { ListContext } from '../context/ListContext';
import './shopscreen.css'

export const ShopList = () => {



  
  console.log("Shoplist renderizado");

  const {shoplist, setshoplist} = useContext (ListContext);
 // const {homelist, sethomelist} = useMemo( () => useContext (ListContext), [homelist] );

  
  const handleDelete = (item) => {

    const newlist = shoplist.filter(object => object.id !== item.id);
    setshoplist(newlist);

    console.log("producto eliminado");

  }

  const handleAllDelete = () => {
    setshoplist([]);
  }





  return (
    <div>ShopList




      {
        shoplist.map( (item, i) => (
          <p key={item.id} > {item.id} - { item.nombre} - {item.precio} - {item.cantidad} - <button onClick={ () => handleDelete(item)}> Eliminar</button> </p>
          
        ))
      }


      <button onClick={ handleAllDelete  }>Eliminar lista de compras</button>


    </div>


    
  )
}
