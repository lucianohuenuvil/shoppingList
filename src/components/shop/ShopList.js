import React, { useContext } from 'react'
import { ListContext } from '../context/ListContext';

export const ShopList = () => {

  const {shoplist} = useContext (ListContext);

  











  return (
    <div>ShopList

      {
        shoplist.map( (item, i) => (
          <p key={item.id} > {item.id} - { item.nombre} - {item.precio} - {item.cantidad}</p>
        ))
      }


    </div>


    
  )
}
