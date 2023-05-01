import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlaceSubmit({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      title='Новое место'
      name='cards'
      buttonName='Создать'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
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
          onChange={handleChangeName}
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
          onChange={handleChangeLink}
        />
        <span
          className='popup__input-error'
          id='cards_input_link-error'></span>
      </label>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
