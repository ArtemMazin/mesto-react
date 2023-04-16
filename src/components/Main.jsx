import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfileData(), api.getInitialCards()])
      .then(([userInfo, arrayCards]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
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
              src={userAvatar}
              alt='Аватар профиля'
              className='profile__avatar'
            />
          </div>

          <div className='profile__info'>
            <div className='profile__description'>
              <h1 className='profile__name'>{userName}</h1>
              <button
                className='profile__edit-button'
                type='button'
                onClick={onEditProfile}></button>
            </div>
            <p className='profile__job'>{userDescription}</p>
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
