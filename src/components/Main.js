import avatar from '../images/kusto.jpg';

function Main(props) {
  const handleEditProfileClick = () => {
    document.querySelector('#popup-profile').classList.add('popup_opened');
  };
  const handleEditAvatarClick = () => {
    document.querySelector('#popup-avatar').classList.add('popup_opened');
  };
  const handleAddPlaceClick = () => {
    document.querySelector('#popup-cards').classList.add('popup_opened');
  };

  return (
    <main className='main wrapper'>
      <section className='profile'>
        <div className='profile__content'>
          <div
            className='profile__avatar-container'
            onClick={handleEditAvatarClick}>
            <img
              src={avatar}
              alt='Аватар профиля'
              className='profile__avatar'
            />
          </div>

          <div className='profile__info'>
            <div className='profile__description'>
              <h1 className='profile__name'></h1>
              <button
                className='profile__edit-button'
                type='button'
                onClick={handleEditProfileClick}></button>
            </div>
            <p className='profile__job'></p>
          </div>
        </div>
        <button
          className='profile__add-button'
          type='button'
          onClick={handleAddPlaceClick}></button>
      </section>
      <section className='cards'>
        <ul className='cards__items'></ul>
      </section>
    </main>
  );
}

export default Main;
