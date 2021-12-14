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
import SingleBlog from "./pages/blog/SingleBlog";


const routes = [
  'TVS','HERO','HONDA','BAJAJ','YAMAHA','SUZUKI','ROYELENFIELD','BMW'
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
        <Route path="/blog/:title" element={<SingleBlog />} />  
           
        </Routes>
     </AppContext>
  );
}

export default App;
