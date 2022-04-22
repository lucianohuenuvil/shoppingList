import React from 'react'
import './filterscreen.css'

export const FilterScreen = () => {


  const submitForm = (e) => {
    e.preventDefault();
  }

  return (
    <div className='filterscreen'>  

      <form onSubmit={submitForm}>
        <input className='text' type="text" placeholder='Busca tu producto' />
        <input className='button' type="submit" value="Buscar"/>

      </form>

      
    </div>
  )
}
