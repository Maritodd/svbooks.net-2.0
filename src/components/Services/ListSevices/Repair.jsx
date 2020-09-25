import React from 'react';
import Slider from "../../../utils/Slider";
import {NavLink} from "react-router-dom";


const Repair = (props)  => {

    return (
        <div className="App">
            <Slider store={props.store}/>
        </div>
    );
}

export default Repair;


