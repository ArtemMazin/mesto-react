import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  onUpdateValid,
  isValid,
  resetForm,
}) {
  const input = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: input.current.value,
    });

    resetForm(e);
  }
  useEffect(() => {
    input.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      title='Обновить аватар'
      name='avatar'
      buttonName='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}>
      <label>
        <input
          className='popup__input popup__input_type_name'
          name='avatar'
          type='url'
          placeholder='Введите ссылку на изображение'
          required
          ref={input}
          onChange={onUpdateValid}
        />
        <span
          className='popup__input-error'
          id='avatar-error'></span>
      </label>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
