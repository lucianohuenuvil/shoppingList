import React, { useContext, useState } from 'react'
import { ListContext } from '../context/ListContext'
import { EditHomeList } from './EditHomeList';

export const HomeList = () => {


  const {homelist, sethomelist} = useContext (ListContext);

  const [editable, seteditable] = useState(false);

  const [formsetup, setformsetup] = useState({
    id:'',
    nombre:'',
    cantidad:'',
    precio:''
  })


  const handleSelect = (item) =>{ 
    if (item.estado == 1){
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
    seteditable(!editable);
    setformsetup(item);
  }
  

  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">A comprar</th>
            <th scope="col">Nombre</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
 


            {             
              homelist.map ( item => (
                <tr key={item.id}> 
                  <th scope="row text-center">
                    
                    {
                      (item.estado == 0)
                      ? <p className='redpoint'> </p>
                      :
                        <p className='greenpoint'> </p>
                    }
                  </th>
                  <td className='text-center'>{ item.nombre}</td>
                  <td>{ item.precio}</td>
                  <td>{ item.cantidad}</td>
                  <td>

                    <button onClick={ () => handleSelect (item)} >Agregar</button>
                    <button onClick={ () => handleEdit (item)} >Modificar</button>
                    <button onClick={ () => handleDelete (item)} >Eliminar</button>
                    
                  </td>



                </tr> 
                
              ))
            }


        </tbody>
      </table>


    

      <div>
        <EditHomeList prop={formsetup} edit={editable}></EditHomeList>
      </div>



    </div>

  )
}




