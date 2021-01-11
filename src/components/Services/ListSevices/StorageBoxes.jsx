import React from 'react';
import Slider from "../../../utils/Slider";

const StorageBox = (props) => {
    return (
        <div className="repair">
            <div className="repair-title">
                <p className="repair-title__item">Storage Boxes</p>
            </div>
            <div className="repair-slider">
                <Slider store={props.store.storageBoxes}/>
            </div>
            <div className="repair-container">
                <h2 className="repair-container__block_name">Storage Boxes</h2>
            </div>
        </div>
    );
}

export default StorageBox;

