import React from 'react'
import { FilterScreen } from '../filter/FilterScreen'
import { HomeList } from './HomeList'

export const HomeScreen = () => {
  return (
    <div className='container'>
      <h1> Lista del hogar </h1> 
      <div>
        <FilterScreen></FilterScreen>
        <HomeList></HomeList>

      </div>


    </div>
  )
}
