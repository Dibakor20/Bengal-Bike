import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';

import AppContext from "./context/AppContext";
import HomePage from "./pages/homePage/HomePage";
import SingleProduct from "./pages/products/SingleProduct";



function App() {
  
  return (
    <AppContext>
      <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:title" element={<SingleProduct />} />
      
           
        </Routes>
     </AppContext>
  );
}

export default App;
