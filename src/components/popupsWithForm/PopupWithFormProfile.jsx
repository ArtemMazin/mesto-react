import React from 'react';

function PopupWithFormProfile() {
  return (
    <label>
      <input
        className='popup__input popup__input_type_name'
        type='text'
        name='name'
        placeholder='Введите имя'
        required
        minLength='2'
        maxLength='40'
      />
      <span
        className='popup__input-error'
        id='name-error'></span>
      <input
        className='popup__input popup__input_type_job'
        type='text'
        name='job'
        placeholder='Введите профессию'
        required
        minLength='2'
        maxLength='200'
      />
      <span
        className='popup__input-error'
        id='job-error'></span>
    </label>
  );
}
export default PopupWithFormProfile;
