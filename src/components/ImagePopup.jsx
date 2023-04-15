import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_background_dark ${card ? 'popup_opened' : ''}`}
      id='popup-image'>
      <div className='popup__image-container'>
        <img
          src={card ? card.link : ''}
          className='popup__image'
          alt={card ? card.name : ''}
        />
        <p className='popup__description'>{card ? card.name : ''}</p>
        <button
          className='popup__close-btn'
          type='button'
          onClick={onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
