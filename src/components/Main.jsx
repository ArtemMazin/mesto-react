import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards()])
      .then(([arrayCards]) => {
        setCards(arrayCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      // Обновляем стейт
      setCards(newCards);
    });
  }
  function handleCardDelete(card) {
    api.deleteCard(card._id).then((newCard) => {
      const newCards = newCard.filter((newCard) => !newCard);
      setCards(newCards);
    });
  }

  return (
    <main className='main wrapper'>
      <section className='profile'>
        <div className='profile__content'>
          <div
            className='profile__avatar-container'
            onClick={onEditAvatar}>
            <img
              src={currentUser.avatar}
              alt='Аватар профиля'
              className='profile__avatar'
            />
          </div>

          <div className='profile__info'>
            <div className='profile__description'>
              <h1 className='profile__name'>{currentUser.name}</h1>
              <button
                className='profile__edit-button'
                type='button'
                onClick={onEditProfile}></button>
            </div>
            <p className='profile__job'>{currentUser.about}</p>
          </div>
        </div>
        <button
          className='profile__add-button'
          type='button'
          onClick={onAddPlace}></button>
      </section>
      <section className='cards'>
        <ul className='cards__items'>
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
