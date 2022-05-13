import React from 'react'
import { UseForm } from '../hooks/UseForm'
import './filterscreen.css'

export const FilterScreen = ( {setinputSearch} ) => {


  const formInit = { //Valores iniciales del formulario
    inputsearch:''
  }

  const [{inputsearch}, handleInput ] = UseForm(formInit)

    

  const submitForm = (e) => {
    e.preventDefault();
    setinputSearch(inputsearch);
  }





  return (
    <div className='filterscreen'>  

      <form className='filterscreen-form' onSubmit={submitForm}>
       
        <input className='filterscreen-text' type="text" placeholder='Busca tu producto'  autoComplete='off' name="inputsearch" value={inputsearch} onChange={handleInput}/>
        <button className='filterscreen-button color-blue' type='submit'> <i className="fa-solid fa-magnifying-glass"></i></button>

      </form>

      
    </div>
  )
}
