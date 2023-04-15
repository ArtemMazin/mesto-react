import '../index.css';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import PopupWithFormProfile from './popupsWithForm/PopupWithFormProfile';
import PopupWithFormCard from './popupsWithForm/PopupWithFormCard';
import PopupWithFormAvatar from './popupsWithForm/PopupWithFormAvatar';

function App() {
  //использую пустую строку для начального значения, т.к. она приводится к false и ее удобно возвращать с оператором &&
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState('');
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState('');
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState('');
  const [selectedCard, setSelectedCard] = React.useState('');

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleCardClick = (card) => setSelectedCard(card);
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen('');
    setIsEditAvatarPopupOpen('');
    setIsAddPlacePopupOpen('');
    setSelectedCard('');
  };

  return (
    <div>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title='Редактировать профиль'
        name='profile'
        buttonName='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <PopupWithFormProfile />
      </PopupWithForm>
      <PopupWithForm
        title='Новое место'
        name='cards'
        buttonName='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <PopupWithFormCard />
      </PopupWithForm>
      <PopupWithForm
        title='Обновить аватар'
        name='avatar'
        buttonName='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <PopupWithFormAvatar />
      </PopupWithForm>
      <PopupWithForm
        title='Вы уверены?'
        name='delete'
        buttonName='Да'
        onClose={closeAllPopups}></PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
