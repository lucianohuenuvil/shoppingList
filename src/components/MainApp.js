import React, { useEffect, useState } from 'react'
import { ListContext } from './context/ListContext'
import { AppRouter } from './routers/AppRouter'


const initHome = () => {
    return JSON.parse(localStorage.getItem('homelist')) || [];
}


export const MainApp = () => {

    const [homelist, sethomelist] = useState(initHome)
    
    useEffect( () => {
        if (initHome.length != 0)  {
            return;
        } else  {
            localStorage.setItem('homelist', JSON.stringify(homelist))
        }
    },[homelist])



    return (
            <ListContext.Provider  value={{ homelist, sethomelist}}>
                <AppRouter></AppRouter>
            </ListContext.Provider>

    )
}
