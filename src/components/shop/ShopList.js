import React, { useContext, useState } from 'react'
import { ListContext } from '../context/ListContext';
import { EditShopList } from './EditShopList';


export const ShopList = () => {


  const {homelist, sethomelist, shoplist, setshoplist} = useContext (ListContext);

  const [editable, seteditable] = useState(false);

  const [formsetup, setformsetup] = useState({
    id:'',
    nombre:'',
    cantidad:'',
    precio:''
  })

  

  const handleDelete = (item) => {//////////////////---------------------

    const updatelist = homelist.map( data => {
      if ( data.id === item.id){
        if(data.estado == 1){
            data.estado = 0;
            data.recogido = 0;
            data.cantidad_seleccion = 1;
        } else {
            data.estado = 1;
        }  
      }
      return data;
    })
    sethomelist(updatelist); 



  }

  const handleAllDelete = () => {//////////////////---------------------
    const updatelist = homelist.map( data => {
        data.estado = 0;
        data.recogido = 0;
        data.cantidad_seleccion = 1;
        return data;
    })
    sethomelist(updatelist); 
  }


  const handleSelect= (item) => {//////////////////---------------------
     /* const updatelist = homelist.map( data => {
        if ( data.id === item.id){
          if(data.recogido == 1){
              data.recogido = 0;
          } else {
              data.recogido = 1;
          }  
        }
        return data;
      })
      sethomelist(updatelist); */
  }    


/*
  const handleSelect = (item) => {
    seteditable(!editable);
    setformsetup(item)
  }*/


  const handlePickUp= (item) => {//////////////////---------------------
    const updatelist = homelist.map( data => {
      if ( data.id === item.id){
        if(data.recogido == 1){
            data.recogido = 0;
        } else {
            data.recogido = 1;
        }  
      }
      return data;
    })
    sethomelist(updatelist); 
}   


  return (
    <div>
      <h1> ShopList COMPONENT</h1>

      {
        homelist.map( (item, i) => (
          (item.estado === 1)
            && 
            <p key={item.id} > {item.id} - { item.nombre} - {item.precio} - {item.cantidad_seleccion} - {item.estado}
              <button onClick={ () => handleDelete(item)}> Eliminar</button>  
              <button onClick={ () => handleSelect(item)}> Modificar</button>
              {
                (item.recogido === 0)
                  ? <button onClick={ () => handlePickUp(item)}> Almacenar</button>
                  : <button onClick={ () => handlePickUp(item)}> Dejar</button>
              }
              {
                (item.recogido === 0)
                  ? <p className='redpoint'></p>
                  : <p className='greenpoint'></p>
              }
            </p>
        ))
      }

      { 
        (homelist.length != 0)
        && <button onClick={handleAllDelete}>Eliminar todo</button>
      }


    </div>

    


    
  )
}
