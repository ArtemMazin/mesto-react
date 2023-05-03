import { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function PopupWithSubmit({ isOpen, onClose, onSubmit, card }) {
  const handleSubmit = () => onSubmit(card);

  return (
    <PopupWithForm
      title='Вы уверены?'
      name='delete'
      buttonName='Да'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}></PopupWithForm>
  );
}
export default PopupWithSubmit;
