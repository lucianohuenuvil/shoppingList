import React, { useContext, useEffect } from 'react'
import { ListContext } from '../context/ListContext'
import { UseForm } from '../hooks/UseForm'

export const EditShopList = ({prop, edit}) => {

    const [input, handleInput,handleReset, handleEdit ] = UseForm({ //Custom hook del state de un formulario, para evitar hacer mas codigo del necesario, se envían los inputs requeridos
      id:'',
      nombre:'',
      cantidad:'',
      precio:''
    })

    const formInit = { //Valores iniciales del formulario
      id:'',
      nombre:'',
      cantidad:'',
      precio:''
    }

    
    const { id,nombre,cantidad,precio } = input;

    const {shoplist, setshoplist} = useContext (ListContext); //LISTA DE COMPRAS


    useEffect(() => {         
        handleEditShopList(prop);
    }, [edit])



    const handleEditShopList = (item) => {
      handleEdit(item);
    }

      
    const submitForm = (e) => { //Submit del formulario
        e.preventDefault(); //Evita que al hacer submit la pagina recargue

        if(nombre.length > 2 && cantidad.length > 0 && precio.length > 0  ){

            const updatelist= shoplist.map( item => {
              if ( item.id === e.target.id.value){
                item.id = e.target.id.value;
                item.nombre = e.target.nombre.value;
                item.cantidad=  e.target.cantidad.value;
                item.precio= e.target.precio.value;
              }
              return item;
            })
            setshoplist(updatelist); //Actualizar lista del hogar
            handleReset(formInit); //Resetear formulario
          }
    }



    return (
        <div>
            
            <h1>EditHomeList</h1> 

            <form onSubmit={submitForm}>
                <input type="text" placeholder='Ingresa el id' name="id" value={id} onChange={handleInput}/>
                <input type="text" placeholder='Nombre' name="nombre" value={nombre} onChange={handleInput} />
                <input type="number" placeholder='Stock' name="cantidad" value={cantidad} onChange={handleInput}/>
                <input type="number" placeholder='Precio' name="precio" value={precio} onChange={handleInput}/>
                <input type="submit" value="Guardar"/>
            </form>

        </div>
    )
}
