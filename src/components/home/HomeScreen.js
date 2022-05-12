import React from 'react'
import { useState } from 'react'
import { FilterScreen } from '../filter/FilterScreen'
import { HomeList } from './HomeList'

import './homelist.css'

export const HomeScreen = (  ) => {


  const [inputSearch, setinputSearch] = useState('')
  


  console.log(inputSearch)

  return (
    <div className='homecreen-component'>
      <FilterScreen setinputSearch={setinputSearch} ></FilterScreen>
      <HomeList inputSearch={inputSearch} ></HomeList>
    </div>


  )
}
