import React, { useState, useContext } from 'react'

import { AddForm } from './AddForm';
import "./addform.css"

export const AddScreen = () => {



  return (
    <div className='addform-screen'>
       <h1> Agrega un producto a la lista </h1>

        <AddForm ></AddForm>
      
      </div>
  )
}
