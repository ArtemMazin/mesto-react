import '../index.css';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

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
        <label>
          <input
            className='popup__input popup__input_type_name'
            type='text'
            name='name'
            // value=''
            placeholder='Введите имя'
            required
            minLength='2'
            maxLength='40'
          />
          <span
            className='popup__input-error'
            id='name-error'></span>
          <input
            className='popup__input popup__input_type_job'
            type='text'
            name='job'
            // value=''
            placeholder='Введите профессию'
            required
            minLength='2'
            maxLength='200'
          />
          <span
            className='popup__input-error'
            id='job-error'></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        title='Новое место'
        name='cards'
        buttonName='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <label>
          <input
            className='popup__input popup__input_type_name'
            id='name-cards__input'
            type='text'
            name='cards_input_name'
            // value=''
            placeholder='Введите название'
            required
            minLength='2'
            maxLength='30'
          />
          <span
            className='popup__input-error'
            id='cards_input_name-error'></span>
          <input
            className='popup__input popup__input_type_job'
            id='link-cards__input'
            type='url'
            name='cards_input_link'
            // value=''
            placeholder='Введите ссылку'
            required
          />
          <span
            className='popup__input-error'
            id='cards_input_link-error'></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        title='Обновить аватар'
        name='avatar'
        buttonName='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <label>
          <input
            className='popup__input popup__input_type_name'
            name='avatar'
            type='url'
            // value=''
            placeholder='Введите ссылку на изображение'
            required
          />
          <span
            className='popup__input-error'
            id='avatar-error'></span>
        </label>
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
