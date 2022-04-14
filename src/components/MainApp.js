import React, { useEffect, useState } from 'react'
import { ListContext } from './context/ListContext'
import { AppRouter } from './routers/AppRouter'


console.log("Main renderizado");


const initHome = () => {
    return JSON.parse(localStorage.getItem('homelist')) || [];
}

const initList = () => {
    return JSON.parse(localStorage.getItem('shoplist')) || [];
}




export const MainApp = () => {


    

    const [homelist, sethomelist] = useState(initHome)
    
    const [shoplist, setshoplist] = useState(initList);

   // const [goToShop, setgoToShop] = useState(false);
    


    useEffect( () => {
        if (!initHome)  {
            return;
        } else  {
            localStorage.setItem('homelist', JSON.stringify(homelist))
        }
    },[homelist])


    useEffect( () => {
        if (!initList)  {
            return;
        } else  {
            localStorage.setItem('shoplist', JSON.stringify(shoplist))
        }
    },[shoplist])
     



    return (
        <ListContext.Provider value={
            { homelist, sethomelist, 
                shoplist, setshoplist
            }}>
            <AppRouter></AppRouter>
        </ListContext.Provider>
    )
}
