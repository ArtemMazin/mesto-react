import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const input = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: input.current.value,
    });
  }
  React.useEffect(() => {
    input.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      title='Обновить аватар'
      name='avatar'
      buttonName='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <label>
        <input
          className='popup__input popup__input_type_name'
          name='avatar'
          type='url'
          placeholder='Введите ссылку на изображение'
          required
          ref={input}
        />
        <span
          className='popup__input-error'
          id='avatar-error'></span>
      </label>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
