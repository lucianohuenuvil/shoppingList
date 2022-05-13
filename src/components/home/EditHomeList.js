import React, { useContext, useEffect } from 'react'
import { ListContext } from '../context/ListContext';
import { UseForm } from '../hooks/UseForm';

export const EditHomeList = ({prop, seteditable}) => {


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
    }, [prop])



    const handleEditHomeList = (item) => {
        handleEdit(item);
    }

    const handleSetButton = () => {
        seteditable(false);
    }
  
      
    const submitFormat = (e) => { //Submit del formulario
        e.preventDefault(); //Evita que al hacer submit la pagina recargue
 
        if(nombre.length > 2 && cantidad.length > 0 && precio.length > 0  ){
            const itemfound =  homelist.find(object => object.id === e.target.id.value)
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
        <div className='edithomelist-container'>
            
            <form onSubmit={submitFormat}>
                <div className="edithomelist-form">
                    <label>Id:</label>
                    <input type="text" placeholder='Ingresa el id' name="id" autoComplete='off' value={id} onChange={handleInput}/>
                </div>
                <div className="edithomelist-form">

                    <label>Nombre:</label>
                    <input type="text" placeholder='Nombre' name="nombre" autoComplete='off' value={nombre} onChange={handleInput} />
                </div>
                <div className="edithomelist-form">

                    <label>Cantidad:</label>
                    <input type="number" placeholder='Stock' name="cantidad" autoComplete='off' value={cantidad} onChange={handleInput}/>
                </div>
                <div className="edithomelist-form">

                </div>
                <div className="edithomelist-form">
                    <label>Precio:</label>
                    <input type="number" placeholder='Precio' name="precio" autoComplete='off' value={precio} onChange={handleInput}/>
                </div>

                <div className="edithomelist-form">
                    <button className='color-blue' type='submit'>Guardar</button>
                </div>
                <div className="edithomelist-form ">
                    <button className='color-red' onClick={handleSetButton} type='button'>Cerrar</button>
                </div>
                
               
            </form>

        </div>
    )
}
