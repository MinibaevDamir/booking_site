import './App.css';
import Footer from "./Components/DetailElements/Footer";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import RouteController from "./RouteController";
import HeaderContainer from "./Containers/HeaderContainer";


function App() {
    return (
        <BrowserRouter>
        <div>
            <HeaderContainer/>
            <RouteController/>
            <Footer/>
        </div>
        </BrowserRouter>
    )
}

export default App;
