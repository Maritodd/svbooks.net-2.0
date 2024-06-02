import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './style.scss';

import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/Home";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Repair from "./components/Services/ListSevices/Repair";
import FamilyBibles from "./components/Services/ListSevices/FamilyBibles";
import StorageBox from "./components/Services/ListSevices/StorageBoxes";
import MapsPage from "./components/Services/ListSevices/Maps";
// import ReactGA from 'react-ga';

const App = ({ store }) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="body">
            <Router>
                <Header store={store._state} />
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path="/contact" element={<Contact store={store._state} />} />
                    <Route path="/services" element={<Services store={store._state} />} />
                    <Route path="/restorations" element={<Repair store={store._state} />} />
                    <Route path="/bibles" element={<FamilyBibles store={store._state} />} />
                    <Route path="/maps" element={<MapsPage store={store._state} />} />
                    <Route path="/boxes" element={<StorageBox store={store._state} />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
