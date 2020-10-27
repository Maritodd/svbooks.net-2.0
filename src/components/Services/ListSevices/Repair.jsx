import React from 'react';
import Slider from "../../../utils/Slider";
import ModalImage from "react-modal-image";



const Repair = (props) => {

    let state = props.store.servicePage;

    return (
        <div className="repair">
            <div className="repair-slider">
                <h2 className="repair-slider__title">Book restoration</h2>
                <Slider store={props.store}/>
            </div>
            <div className="repair-container">
                <h2 className="repair-container__block_name">We also perform different types of bindings</h2>
                <div className="repair-container__block">
                    <h3 className="repair-container__block_name">Period binding</h3>
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
                <div className="repair-container__block">
                    <h3 className="repair-container__block_name">Design binding</h3>
                    <div className="repair-container__block_item">
                    {
                        state.design.map(s => <div key={s.id}>
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

export default Repair;


