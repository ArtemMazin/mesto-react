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
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getProfileData()])
      .then(([arrayCards, userInfo]) => {
        setCurrentUser(userInfo);
        setCards(
          arrayCards.map((card) => ({
            link: card.link,
            id: card._id,
            name: card.name,
            likes: card.likes,
          }))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleCardClick = (card) => setSelectedCard(card);
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
