import React, { useContext, useEffect } from 'react'
import { ListContext } from '../context/ListContext';
import { UseForm } from '../hooks/UseForm';

export const EditHomeList = ({prop, edit}) => {


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

    const {homelist, sethomelist} = useContext (ListContext); //LISTA DEL HOGAR


    useEffect(() => {         
        handleEditHomeList(prop);
    }, [edit])



    const handleEditHomeList = (item) => {
        handleEdit(item);
    }
  
      
    const submitFormat = (e) => { //Submit del formulario
        e.preventDefault(); //Evita que al hacer submit la pagina recargue
 
        if(nombre.length > 2 && cantidad.length > 0 && precio.length > 0  ){
            const itemfound =  homelist.find(object => object.id == e.target.id.value)
            if (!itemfound){
                alert("El producto no fue encontrado");
            }else{
                const updatelisthome = homelist.map( item => {
                    if ( item.id === e.target.id.value){
                        item.nombre = e.target.nombre.value;
                        item.cantidad=  e.target.cantidad.value;
                        item.precio= e.target.precio.value;
                    }
                    return item;
                })
                sethomelist(updatelisthome);
                handleReset(formInit);
            }
          }
    }



    return (
        <div>
            
            <h1>EditHomeList</h1> 

            <form onSubmit={submitFormat}>

                <input type="text" placeholder='Ingresa el id' name="id" value={id} onChange={handleInput}/>
                <input type="text" placeholder='Nombre' name="nombre" value={nombre} onChange={handleInput} />
                <input type="number" placeholder='Stock' name="cantidad" value={cantidad} onChange={handleInput}/>
                <input type="number" placeholder='Precio' name="precio" value={precio} onChange={handleInput}/>
                <input type="submit" value="Guardar"/>
            </form>

        </div>
    )
}
