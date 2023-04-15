import React from 'react';

function PopupWithFormAvatar() {
  return (
    <label>
      <input
        className='popup__input popup__input_type_name'
        name='avatar'
        type='url'
        placeholder='Введите ссылку на изображение'
        required
      />
      <span
        className='popup__input-error'
        id='avatar-error'></span>
    </label>
  );
}
export default PopupWithFormAvatar;
