import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import PageLayout from "./components/pageLayout/PageLayout";

import AppContext from "./context/AppContext";
import HomePage from "./pages/homePage/HomePage";
import SingleProduct from "./pages/products/SingleProduct";
import TVS from "./pages/allBrand/TVS";
import HONDA from "./pages/allBrand/HONDA";


const routes = [
  'TVS','HERO','HONDA'
]


function App() {
  
  return (
    <AppContext>
      <Routes>
        {
          routes.map((name, index) => <Route key={name + index} path={`/${name}`} element={<PageLayout page={ name}/>}/>)
        }
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:title" element={<SingleProduct />} />
        <Route path="/TVS" element={<TVS />} />
        <Route path="/TVS" element={<HONDA/>} />
           
        </Routes>
     </AppContext>
  );
}

export default App;
