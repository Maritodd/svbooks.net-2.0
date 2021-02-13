import React from 'react';
import Slider from "../../../utils/Slider";
import ModalImage from "react-modal-image";


const MapsPage = (props) => {

    let state = props.store.bindings;

    return (
        <div className="repair">
            <div className="repair-title">
            <p className="repair-title__item">Map & Print Conservation</p>
            </div>
            <div className="repair-slider">
                <Slider store={props.store.maps}/>
            </div>
            <div className="repair-container">
                <h2 className="repair-container__block_name">We also perform different types of restoration</h2>
                <div className="repair-container__block">
                    <h3 className="repair-container__block_name">Deacidification</h3>
                    <div className="repair-container__block_item">
                        {
                            state.period.map(s => <div key={s.id}>
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

export default MapsPage;


