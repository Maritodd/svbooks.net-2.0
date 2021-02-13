import React from 'react';
import Slider from "../../../utils/Slider";
import ModalImage from "react-modal-image";

const Repair = (props) => {

    let state = props.store.bindings;

    return (
        <div className="repair">
            <div className="repair-title">
                <p className="repair-title__item">Book restoration</p>
            </div>
            <div className="repair-slider">
                <Slider store={props.store.restorationBooks}/>
            </div>
            <div className="repair-container">
                <h2 className="repair-container__block_name">We also make different types of bindings</h2>
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


