import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title='Редактировать профиль'
      name='profile'
      buttonName='Сохранить'
      isOpen={isOpen}
      onClose={onClose}>
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
    </PopupWithForm>
  );
}
export default EditProfilePopup;
