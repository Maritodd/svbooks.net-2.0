import React, {Suspense, useEffect, useState} from 'react';
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
import FamilyBibles from "./components/Services/ListSevices/FamilyBibles";
import StorageBox from "./components/Services/ListSevices/StorageBoxes";
import MapsPage from "./components/Services/ListSevices/Maps";

AOS.init();

function App(props) {
    return (
        <div className="body">
                <Header store={props.store._state}/>
                <Route exact path={"/home"} render={() => <HomePage/>}/>
                <Redirect from='/' to='/home'/>
                <Route path={"/contact"} render={() => <Contact store={props.store._state}/>}/>
                <Route path={"/services"} render={() => <Services store={props.store._state}/>}/>
                <Route path={"/restorations"} render={() => <Repair store={props.store._state}/>}/>
                <Route path={"/bibles"} render={() => <FamilyBibles store={props.store._state}/>}/>
                <Route path={"/maps"} render={() => <MapsPage store={props.store._state}/>}/>
                <Route path={"/boxes"} render={() => <StorageBox store={props.store._state}/>}/>
                <Route path={"/about"} render={() => <About/>}/>
                <Footer/>

        </div>
    );
}

export default App;
