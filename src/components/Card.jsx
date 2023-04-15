import React from 'react';

function Card({ card, onCardClick }) {
  const handleClick = () => onCardClick(card);

  return (
    <li className='cards__item'>
      <button
        className='cards__remove-icon'
        type='button'></button>
      <img
        src={card.link}
        alt={card.name}
        className='cards__image'
        onClick={handleClick}
      />
      <div className='cards__description'>
        <h2 className='cards__text'>{card.name}</h2>
        <div>
          <button
            className='cards__like'
            type='button'></button>
          <p className='cards__like-count'>{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
