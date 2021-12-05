import React from 'react';
import Slider from '../../../utils/Slider';
import ModalImage from 'react-modal-image';

const FamilyBibles = ({ store }) => {
    const { service, modern } = store.bibleBooks;

    return (
        <div className="repair">
            <div className="repair-title">
                <p className="repair-title__item">Family Bibles</p>
            </div>
            <div className="repair-slider">
                <Slider store={store.bibleBooks} />
            </div>
            <div className="repair-container">
                <h2 className="repair-container__block_name">Family and Study Bibles</h2>
                <div className="repair-container__block">
                    <div className="repair-container__block_item">
                        {service.map(s => (
                            <div key={s.id}>
                                <ModalImage
                                    className="repair-img"
                                    small={s.photo}
                                    medium={s.photo}
                                    alt="Family Bible"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="repair-container">
                <h2 className="repair-container__block_name">Custom made/Modern style</h2>
                <div className="repair-container__block">
                    <div className="repair-container__block_item">
                        {modern.map(s => (
                            <div key={s.id}>
                                <ModalImage
                                    className="repair-img"
                                    small={s.photo}
                                    medium={s.photo}
                                    alt="Modern Style Bible"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FamilyBibles;
