import React from 'react';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/Home";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import "./style.scss";

function App() {
    return (
        <div className="body">
            <Header/>
            <Route path={"/home"} render={() => <HomePage/>}/>
            <Route path={"/contact"} render={() => <Contact/>}/>
            <Route path={"/services"} render={() => <Services/>}/>
            <Route path={"/about"} render={() => <About/>}/>
            <Footer/>
        </div>
    );
}

export default App;
