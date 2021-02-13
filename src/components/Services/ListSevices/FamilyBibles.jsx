import React from 'react';
import Slider from "../../../utils/Slider";


const FamilyBibles = (props) => {
    return (
        <div className="repair">
            <div className="repair-title">
                <p className="repair-title__item">Family Bibles</p>
            </div>
            <div className="repair-slider">
                <Slider store={props.store.bibleBooks}/>
            </div>
            <div className="repair-container">
                <h2 className="repair-container__block_name">Family and Study Bibles</h2>
            </div>
        </div>
    );
}

export default FamilyBibles;


