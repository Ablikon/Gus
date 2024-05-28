import Navbar from "./Components/navbar/navbar";
import React from 'react';
import Shop from './pages/Shop'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from "./pages/Categories";
import About from "./pages/about";
import Contacts from "./pages/Contacts";
import Partner from "./pages/Partner";
import Basket from "./pages/Basket";
import Auth from "./pages/Auth";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/> } />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/partner" element={<Partner/>}/>
          <Route path="/basket" element={<Basket/>}/>
          <Route path="/Auth" element={<Auth/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
