import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import AppContext from "./context/AppContext";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <AppContext>
        <Routes>
        <Route path="/" element={ <HomePage/> }/>
        </Routes>
     </AppContext>
  );
}

export default App;
