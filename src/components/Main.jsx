import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfileData().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
    api.getInitialCards().then((data) => {
      setCards(
        data.map((card) => ({
          link: card.link,
          id: card._id,
          name: card.name,
          likes: card.likes,
        }))
      );
    });
  }, []);

  return (
    <main className='main wrapper'>
      <section className='profile'>
        <div className='profile__content'>
          <div
            className='profile__avatar-container'
            onClick={props.onEditAvatar}>
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
                onClick={props.onEditProfile}></button>
            </div>
            <p className='profile__job'>{userDescription}</p>
          </div>
        </div>
        <button
          className='profile__add-button'
          type='button'
          onClick={props.onAddPlace}></button>
      </section>
      <section className='cards'>
        <ul className='cards__items'>
          {cards.map((card) => (
            <Card
              card={card}
              key={card.id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
