import React, { useContext, useState } from 'react'
import { ListContext } from '../context/ListContext';

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
        if(data.estado === 1){
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
        if(data.recogido === 1){
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
    <div className='list-component'>
      <div className='list'>
        {
          homelist.map( (item, i) => (
            
              (item.estado === 1)
              && 

              <div key={item.id} className="list-box height-box">
            
                  <div className='list-detail '>
                    <p>Producto: { item.nombre}</p>
                    <p>Precio: { item.precio}</p>
                    <p>Cantidad: { item.cantidad}</p>
                  </div>

                  <div className='shop-buttons button'>
                    <button onClick={ () => handleDelete(item)}> <i className="fa-solid fa-trash"></i></button>  

                    {
                      
                      (item.recogido === 0)
                      ? <button onClick={ () => handlePickUp(item)}><i class="fa-solid fa-hand"></i></button>
                      : <button onClick={ () => handlePickUp(item)}> <i class="fa-solid fa-hand-back-fist"></i> </button>
                      
                    }

                    <div className='align-text'>

                      {
                        
                        (item.recogido === 0)
                          ? <p className='redpoint align-text'></p>
                          : <p className='greenpoint align-text'></p>
                      }
                    </div>

                  </div>

              </div>

          
          ))
        }

      </div>
    </div>
      


    
  )
}
