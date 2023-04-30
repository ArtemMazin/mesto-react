import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

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
      onSubmit={handleSubmit}>
      <label>
        <input
          className='popup__input popup__input_type_name'
          type='text'
          name='name'
          placeholder='Введите имя'
          required
          minLength='2'
          maxLength='40'
          onChange={handleChangeName}
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
          onChange={handleChangeDescription}
        />
        <span
          className='popup__input-error'
          id='job-error'></span>
      </label>
    </PopupWithForm>
  );
}
export default EditProfilePopup;