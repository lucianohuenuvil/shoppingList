import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { ListContext } from '../context/ListContext'
import { EditHomeList } from './EditHomeList';

export const HomeList = ( {inputSearch}) => {


  const {homelist, sethomelist} = useContext (ListContext);

  const [listObjects, setlistObjects] = useState([]);

  const [editable, seteditable] = useState(false);

  const [objectSelect, setobjectSelect] = useState({});

  const [formsetup, setformsetup] = useState({
    id:'',
    nombre:'',
    cantidad:'',
    precio:''
  })



  useEffect(() => {

    const newArray = homelist.map ( item => {
        let nombre = item.nombre.toLowerCase();
        if(nombre.indexOf(inputSearch.toLowerCase()) !== -1){
            return item;     
        }
      }
    )
    setlistObjects (newArray.filter(Boolean));


  }, [inputSearch]);
  



  const handleSelect = (item) =>{ 
    if (item.estado === 1){
      alert("El producto ya se encuentra en la lista de compras");
    } else {
      const updatelisthome = homelist.map( data => {
        if ( data.id === item.id){
          data.estado = 1
        }
        return data;
      })
      alert("Producto agregado")
      sethomelist(updatelisthome);
  
    }
  }




  
  const handleDelete = (item) =>{ 
    if (homelist.filter(object => object.id !== item.id)){
      const newlist = homelist.filter(object => object.id !== item.id);
      sethomelist(newlist);
    }else{
      console.log("Error");
    }
  }





  const handleEdit = (item) => {
    

    if(Object.keys(item).length === 0){
      alert("Debes seleccionar un item")
    }else{
      seteditable(true);
      window.scrollTo({top:0, behavior:'smooth'})
      setformsetup(item);
    
    }


  }





  const handleObjectSelect = (item) => {
    setobjectSelect(item);
  }
  


  return (


    <div className='homelist-component'>
      
      {
        (editable)
        &&
        <EditHomeList prop={formsetup} seteditable = {seteditable}></EditHomeList>
      }

      


      <div className='homelist-list'>
        { listObjects.map ( item => (   

          <div key={item.id} onClick={ () =>  handleObjectSelect(item)} className={[objectSelect.id === item.id ? 'homelist-container object-select' : 'homelist-container']} >
            <div className='homelist-content'>
              <div className='homelist-state'>
                {(item.estado === 0)
                  ? <p className='redpoint'> </p>
                  : <p className='greenpoint'> </p>
                }
              </div>     
              <div className='homelist-detail'>
                <p>Producto: { item.nombre}</p>
                <p>Precio: { item.precio}</p>
                <p>Cantidad: { item.cantidad}</p>
              </div>
      
            </div>      
          </div>
          ))
        }
      </div>

      <div className='homelist-buttons button'>

                            
        <button onClick={ () => handleSelect (objectSelect)} ><i className="fa-solid fa-plus"></i></button>
        <button onClick={ () => handleEdit (objectSelect)} ><i className="fa-solid fa-pen-to-square"></i></button>
        <button onClick={ () => handleDelete (objectSelect)} ><i className="fa-solid fa-trash"></i></button>

      </div> 



    </div>

  )
}




