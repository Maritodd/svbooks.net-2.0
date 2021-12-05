import React from 'react';
import Slider from '../../../utils/Slider';
import ModalImage from 'react-modal-image';

const MapsPage = ({ store }) => {
    const { service, album } = store.maps;

    return (
        <div className="repair">
            <div className="repair-title">
                <p className="repair-title__item">Map & Print Conservation</p>
            </div>
            <div className="repair-slider">
                <Slider store={store.maps} />
            </div>
            <div className="repair-container">
                <h2 className="repair-container__block_name">We also perform different types of restoration</h2>
                <div className="repair-container__block">
                    <h3 className="repair-container__block_name">Deacidification</h3>
                    <div className="repair-container__block_item">
                        {service.map(item => (
                            <div key={item.id}>
                                <ModalImage
                                    className="repair-img"
                                    small={item.photo}
                                    medium={item.photo}
                                    alt="Book Restoration Designs LLC."
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="repair-container__block">
                    <h3 className="repair-container__block_name">Albums</h3>
                    <div className="repair-container__block_item">
                        {album.map(item => (
                            <div key={item.id}>
                                <ModalImage
                                    className="repair-img"
                                    small={item.photo}
                                    medium={item.photo}
                                    alt="Book Restoration Designs LLC."
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapsPage;
