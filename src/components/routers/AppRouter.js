import { Routes, Route, BrowserRouter } from "react-router-dom";

import { AddScreen } from '../add/AddScreen';
import { HomeScreen } from '../home/HomeScreen';
import { ShopScreen } from '../shop/ShopScreen';
import { Navbar } from '../ui/Navbar';

export const AppRouter = () => {


  return (
    <BrowserRouter>
        <Navbar></Navbar>

        <div className='container mt-5 main-content'>

          <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/listaDeCompras" element={<ShopScreen />} />
              <Route path="/agregarProducto" element={<AddScreen />} />
              
          </Routes>

        </div>
    </BrowserRouter>
  
  )
}
