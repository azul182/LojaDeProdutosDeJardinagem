import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/style.css'

import Sobre from "./pages/sobre";

import Home from './pages/home'

import Contato from "./pages/contato";

function App() {

  return (
    <>
    <div>
      <BrowserRouter>
        <Routes> 
        <Route path="/" element={<Home/>}></Route>
        <Route path="/sobre" element={<Sobre/>}></Route>
        <Route path="/contato" element={<Contato/>}></Route>
         </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
