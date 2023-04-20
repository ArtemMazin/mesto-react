import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const value = useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  console.log(value);

  React.useEffect(() => {
    Promise.all([api.getInitialCards()])
      .then(([arrayCards]) => {
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

  return (
    <main className='main wrapper'>
      <section className='profile'>
        <div className='profile__content'>
          <div
            className='profile__avatar-container'
            onClick={onEditAvatar}>
            <img
              src={''}
              alt='Аватар профиля'
              className='profile__avatar'
            />
          </div>

          <div className='profile__info'>
            <div className='profile__description'>
              <h1 className='profile__name'>{}</h1>
              <button
                className='profile__edit-button'
                type='button'
                onClick={onEditProfile}></button>
            </div>
            <p className='profile__job'>{}</p>
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
              key={card.id}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
