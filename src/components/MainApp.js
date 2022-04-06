import React, { useState } from 'react'
import { ListContext } from './context/ListContext'
import { AppRouter } from './routers/AppRouter'





export const MainApp = () => {

    const [homelist, sethomelist] = useState([{ 
        id:123,
        nombre:'leche',
        cantidad:2,
        precio:1000,

    },{

        id:125,
        nombre:'pan',
        cantidad:3,
        precio:1500,

     }]
    )



    
    const [shoplist, setshoplist] = useState([]);
    
        





    return (
        <ListContext.Provider value={{ homelist, sethomelist, shoplist,setshoplist}}>
            <AppRouter></AppRouter>
        </ListContext.Provider>
    )
}
