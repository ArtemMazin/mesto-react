import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import api from '../utils/api';
import ImagePopup from './ImagePopup';
import AddPlacePopup from './AddPlacePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import PopupWithSubmit from './PopupWithSubmit';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isPopupWithSubmit, setIsPopupWithSubmit] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  //валидацию пока оставлю здесь, т.к. постараюсь ее доработать, после чего перенесу
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({});

  function checkFormValid(e) {
    setIsFormValid(e.target.form.checkValidity());
  }
  function handleChangeErrorsValidation(e) {
    setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
  }
  //

  useEffect(() => {
    Promise.all([api.getProfileData(), api.getInitialCards()])
      .then(([userInfo, arrayCards]) => {
        setCurrentUser(userInfo);
        setCards(arrayCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsPopupWithSubmit(false);
    setSelectedCard(null);
    setErrors({});
  }

  function handleUpdateUser(user) {
    api.changeProfileData(user).then((userInfo) => {
      setCurrentUser(userInfo);
      closeAllPopups();
    });
  }

  function handleUpdateAvatar(user) {
    api.changeAvatar(user).then((userInfo) => {
      setCurrentUser(userInfo);
      closeAllPopups();
    });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      const newCards = cards.filter((newCard) => {
        return newCard._id !== card._id;
      });
      setCards(newCards);
      closeAllPopups();
    });
  }
  function handleRemoveIconClick(card) {
    setSelectedCard(card);
    setIsPopupWithSubmit(true);
  }

  function handleAddPlaceSubmit(card) {
    api.addNewCard(card).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    });
  }

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
          onCardLike={handleCardLike}
          onRemoveIconClick={handleRemoveIconClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          onUpdateValid={checkFormValid}
          isValid={isFormValid}
          setIsFormValid={setIsFormValid}
          handleChangeErrorsValidation={handleChangeErrorsValidation}
          errors={errors}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          onUpdateValid={checkFormValid}
          isValid={isFormValid}
          setIsFormValid={setIsFormValid}
          handleChangeErrorsValidation={handleChangeErrorsValidation}
          errors={errors}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
          onUpdateValid={checkFormValid}
          isValid={isFormValid}
          setIsFormValid={setIsFormValid}
          handleChangeErrorsValidation={handleChangeErrorsValidation}
          errors={errors}
        />
        <PopupWithSubmit
          isOpen={isPopupWithSubmit}
          onClose={closeAllPopups}
          onSubmit={handleCardDelete}
          card={selectedCard}
          isValid={isFormValid}
          setIsFormValid={setIsFormValid}
        />
        <ImagePopup
          isOpen={isImagePopupOpen}
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
