import React, { useState, useContext } from 'react'
import { ListContext } from '../context/ListContext';

export const AddScreen = () => {

  const {homelist, sethomelist} = useContext (ListContext);

  const [input, setinput] = useState({
    id:'',
    nombre:'',
    cantidad:'',
    precio:''
  })


  const submitForm = (e) => {
    e.preventDefault();

    sethomelist( [...homelist,input]);
    
  }


  const handleInput = (event) => {

    setinput ({
      ...input,
      [event.target.name] : event.target.value
    })
  
  }



  return (
    <div>
       <h1> AddScreen </h1>


       <form onSubmit={submitForm}>

          <input type="text" placeholder='Ingresa el id' name="id" value={input.id} onChange={handleInput}/>
          <input type="text" placeholder='Ingresa el nombre del producto' name="nombre" value={input.nombre} onChange={handleInput}/>
          <input type="number" placeholder='Ingresa la cantidad de stock' name="cantidad" value={input.cantidad} onChange={handleInput}/>
          <input type="number" placeholder='Ingresa el precio' name="precio" value={input.precio} onChange={handleInput}/>
          <input type="submit" value="Guardar"/>

       </form>
      
      
      
      </div>
  )
}
