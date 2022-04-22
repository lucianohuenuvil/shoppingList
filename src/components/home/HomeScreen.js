import React from 'react'
import { FilterScreen } from '../filter/FilterScreen'
import { HomeList } from './HomeList'

import './homelist.css'

export const HomeScreen = () => {
  
  return (
    <div className='content'>
      <h1> Lista de productos en el hogar </h1> 
      <FilterScreen></FilterScreen>
      <HomeList></HomeList>
    </div>


  )
}
