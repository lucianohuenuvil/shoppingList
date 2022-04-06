import React from 'react'

export const FilterScreen = () => {



  const submitForm = (e) => {
    e.preventDefault();
  }





  return (
    <div>  
      <h3>FilterScreen</h3>
      <div >

        <form onSubmit={submitForm}>
          <input type="text" placeholder='Busca tu producto' />
          <input type="submit" value="Buscar"/>

        </form>

      </div>

      
    </div>
  )
}
