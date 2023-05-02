import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser,
  onUpdateValid,
  isValid,
}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      job: description,
    });
  }

  return (
    <PopupWithForm
      title='Редактировать профиль'
      name='profile'
      buttonName='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}>
      <label>
        <input
          className='popup__input popup__input_type_name'
          type='text'
          name='name'
          placeholder='Введите имя'
          required
          minLength='2'
          maxLength='40'
          onChange={(e) => {
            handleChangeName(e);
            onUpdateValid(e);
          }}
          value={name || ''}
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
          onChange={(e) => {
            handleChangeDescription(e);
            onUpdateValid(e);
          }}
          value={description || ''}
        />
        <span
          className='popup__input-error'
          id='job-error'></span>
      </label>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
