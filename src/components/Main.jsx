import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards }) {
  const user = useContext(CurrentUserContext);

  return (
    <main className='main wrapper'>
      <section className='profile'>
        <div className='profile__content'>
          <div
            className='profile__avatar-container'
            onClick={onEditAvatar}>
            <img
              src={user.avatar}
              alt='Аватар профиля'
              className='profile__avatar'
            />
          </div>

          <div className='profile__info'>
            <div className='profile__description'>
              <h1 className='profile__name'>{user.name}</h1>
              <button
                className='profile__edit-button'
                type='button'
                onClick={onEditProfile}></button>
            </div>
            <p className='profile__job'>{user.about}</p>
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
