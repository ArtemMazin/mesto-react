import { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function PopupWithSubmit({ isOpen, onClose, onSubmit, card, setIsFormValid, isValid }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(card);
  };

  useEffect(() => {
    setIsFormValid(true);
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="delete"
      buttonName="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    />
  );
}
export default PopupWithSubmit;
