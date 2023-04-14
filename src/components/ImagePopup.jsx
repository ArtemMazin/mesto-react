import React from "react";

function ImagePopup() {
    return(
        <div
        className='popup popup_background_dark'
        id='popup-image'>
        <div className='popup__image-container'>
          <img
            src='#'
            className='popup__image'
            alt='Изображение места'
          />
          <p className='popup__description'></p>
          <button
            className='popup__close-btn'
            type='button'></button>
        </div>
      </div>
    )
}

export default ImagePopup