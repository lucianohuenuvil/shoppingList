import React, { useContext } from 'react'
import { ListContext } from '../context/ListContext';
import { UseForm } from '../hooks/UseForm';
import { v4 as uuid } from 'uuid';

export const AddForm = () => {

    const {homelist, sethomelist} = useContext (ListContext);



    const [input, handleInput, handleReset ] = UseForm({
        id:uuid(),
        nombre:'',
        cantidad:'',
        precio:''
      })

    const { id,nombre,cantidad,precio } = input;


    console.log(input)

    const submitForm = (e) => {
        e.preventDefault();

        if(nombre.length > 2 && cantidad.length > 0 && precio.length > 0  ){
            sethomelist( [...homelist,input]);

            alert("Producto guardado");

            handleReset(e);

        } else {
            alert("Debe ingresar los datos correspondientes")
          }

    }
    


  return (
    <div>
        
        <p>AddForm</p>

        <div>
           <form onSubmit={submitForm}>

                {/*<input type="text" placeholder='Ingresa el id' name="id" value={id} onChange={handleInput}/>*/}
                <input type="text" placeholder='Ingresa el nombre del producto' name="nombre" value={nombre} onChange={handleInput}/>
                <input type="number" placeholder='Ingresa la cantidad de stock' name="cantidad" value={cantidad} onChange={handleInput}/>
                <input type="number" placeholder='Ingresa el precio' name="precio" value={precio} onChange={handleInput}/>
                <input type="submit" value="Guardar"/>
             </form>
      
        </div>


    </div>

  )
}
