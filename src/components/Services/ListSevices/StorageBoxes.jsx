import React from 'react';
import Slider from "../../../utils/Slider";
import ModalImage from "react-modal-image";

const StorageBox = (props) => {

    let state = props.store.storageBoxes;

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
                <div className="repair-container__block">
                    <div className="repair-container__block_item">
                        {
                            state.service.map(s => <div key={s.id}>
                                <ModalImage className="repair-img"
                                            small={s.photo}
                                            medium={s.photo}
                                            alt="Book Restoration Designs LLC."
                                />;
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StorageBox;

