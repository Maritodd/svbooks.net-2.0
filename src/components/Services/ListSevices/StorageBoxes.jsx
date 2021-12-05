import React from 'react';
import Slider from '../../../utils/Slider';
import ModalImage from 'react-modal-image';

const StorageBox = ({ store }) => {
    const { service } = store.storageBoxes;

    return (
        <div className="repair">
            <div className="repair-title">
                <p className="repair-title__item">Storage Boxes</p>
            </div>
            <div className="repair-slider">
                <Slider store={store.storageBoxes} />
            </div>
            <div className="repair-container">
                <h2 className="repair-container__block_name">Storage Boxes</h2>
                <div className="repair-container__block">
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
            </div>
        </div>
    );
};

export default StorageBox;
