import React from 'react';

function PopupWithFormCard() {
  return (
    <label>
      <input
        className='popup__input popup__input_type_name'
        id='name-cards__input'
        type='text'
        name='cards_input_name'
        placeholder='Введите название'
        required
        minLength='2'
        maxLength='30'
      />
      <span
        className='popup__input-error'
        id='cards_input_name-error'></span>
      <input
        className='popup__input popup__input_type_job'
        id='link-cards__input'
        type='url'
        name='cards_input_link'
        placeholder='Введите ссылку'
        required
      />
      <span
        className='popup__input-error'
        id='cards_input_link-error'></span>
    </label>
  );
}
export default PopupWithFormCard;
