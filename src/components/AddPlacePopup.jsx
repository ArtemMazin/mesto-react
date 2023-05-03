import { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit, onUpdateValid, isValid, setIsFormValid }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

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
      onSubmit={handleSubmit}
      isValid={isValid}
      setIsFormValid={setIsFormValid}
    >
      <label>
        <input
          className='popup__input popup__input_type_name'
          id='name-cards__input'
          type='text'
          name='cards_input_name'
          placeholder='Введите название'
          value={name}
          required
          minLength='2'
          maxLength='30'
          onChange={(e) => {
            handleChangeName(e);
            onUpdateValid(e);
          }}
        />
        <span
          className='popup__input-error'
          id='cards_input_name-error'
        ></span>
        <input
          className='popup__input popup__input_type_job'
          id='link-cards__input'
          type='url'
          name='cards_input_link'
          placeholder='Введите ссылку'
          value={link}
          required
          onChange={(e) => {
            handleChangeLink(e);
            onUpdateValid(e);
          }}
        />
        <span
          className='popup__input-error'
          id='cards_input_link-error'
        ></span>
      </label>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
