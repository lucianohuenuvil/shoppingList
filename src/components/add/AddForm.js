import React, { useContext } from 'react'
import { ListContext } from '../context/ListContext';
import { UseForm } from '../hooks/UseForm';
import { v4 as uuid } from 'uuid';




export const AddForm = () => {


  
    const formInit = { //Valores iniciales del formulario
      id:uuid(),
      nombre:'',
      cantidad:'',
      precio:'',
      estado:0,
      recogido:0,
      cantidad_seleccion:1
    }

    const {homelist, sethomelist} = useContext (ListContext); //Herencia de la lista hogar y set state de la misma

    const [input, handleInput, handleReset ] = UseForm(formInit) //Custom hook del state de un formulario, para evitar hacer mas codigo del necesario, se envían los inputs requeridos

    const {nombre, cantidad, precio } = input; //Desestructuración de los input del formulario para utilizar sus valores de manera independiente



    const submitForm = (e) => { //Submit del formulario
      e.preventDefault(); //Evita que al hacer submit la pagina recargue

      if(nombre.length > 2 && cantidad.length > 0 && precio.length > 0  ){
          sethomelist( [...homelist,input]);
          handleReset(formInit); //Funcion hacer un reset en el form
          alert("Producto guardado");
        } else {
            alert("Debe ingresar los datos correspondientes")
          }
    }
    

  return (
       
      <div className='addform-component'>
        <div className='addform-container'>
           <form onSubmit={submitForm}>

                {/*<input type="text" placeholder='Ingresa el id' name="id" value={id} onChange={handleInput}/>*/}
                <div className='addform-entry'>
                    <input type="text" placeholder='Ingresa el nombre del producto' name="nombre" value={nombre} onChange={handleInput}/>
                </div>
                <div className='addform-entry'>
                    <input type="number" placeholder='Ingresa la cantidad de stock' name="cantidad" value={cantidad} onChange={handleInput}/>
                </div>
                <div className='addform-entry'>
                    <input type="number" placeholder='Ingresa el precio' name="precio" value={precio} onChange={handleInput}/>
                </div>
                <div className='addform-entry '>
                    <button type="submit" className='color-blue'> Guardar</button> 
                </div>


                


             </form>
      
        </div>

      </div>
        



  )
}
