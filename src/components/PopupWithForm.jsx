import React from 'react';

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_background_light ${
        props.isOpen && 'popup_opened'
      }`}
      id={`popup-${props.name}`}>
      <div className='popup__container'>
        <h2 className='popup__title'>{props.title}</h2>
        <form
          className='popup__form'
          name={`form_${props.name}`}
          id={`form-${props.name}`}
          noValidate>
          {props.children}
          <button
            className='popup__button-submit popup__button-submit_disabled'
            type='submit'>
            {props.buttonName}
          </button>
        </form>

        <button
          className='popup__close-btn'
          type='button'
          onClick={props.onClose}></button>
      </div>
    </div>
  );
}
export default PopupWithForm;
