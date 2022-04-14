import React, { useMemo, useState, useContext } from 'react'
import { ListContext } from '../context/ListContext';
import { ShopList } from './ShopList'

export const ShopScreen = () => {


  
console.log("Main renderizado");


  //const [buttonShop, setbuttonShop] = useState (false);

  //console.log(buttonShop)
/*
  const {goToShop, setgoToShop} = useContext(ListContext)

  const go = () => {
    setgoToShop(!goToShop);
   
  }
*/

  return (
    <div>
      ShopScreen

      <div></div>

      <div>
          <ShopList ></ShopList>
      </div>

    </div>


  )
}
