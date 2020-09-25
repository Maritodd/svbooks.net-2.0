import React from 'react';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/Home";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import {Redirect, Route} from "react-router-dom";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import "./style.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Repair from "./components/Services/ListSevices/Repair";

AOS.init();

function App(props) {

    return (
        <div className="body">
            <Header/>
            <Route exact path={"/home"} render={() => <HomePage/>}/>
            <Redirect from='/' to='/home'/>
            <Route path={"/contact"} render={() => <Contact/>}/>
            <Route path={"/services"} render={() => <Services store={props.store._state}/>}/>
            <Route path={"/restorations"} render={() => <Repair store={props.store._state}/>}/>
            <Route path={"/about"} render={() => <About/>}/>
            <Footer/>
        </div>
    );
}

export default App;
