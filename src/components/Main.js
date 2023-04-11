function Main(props) {
  return (
    <main className='main wrapper'>
      <section className='profile'>
        <div className='profile__content'>
          <div className='profile__avatar-container'>
            <img
              src="<%=require('./images/kusto.jpg')%>"
              alt='Аватар профиля'
              className='profile__avatar'
            />
          </div>

          <div className='profile__info'>
            <div className='profile__description'>
              <h1 className='profile__name'></h1>
              <button
                className='profile__edit-button'
                type='button'></button>
            </div>
            <p className='profile__job'></p>
          </div>
        </div>
        <button
          className='profile__add-button'
          type='button'></button>
      </section>
      <section className='cards'>
        <ul className='cards__items'></ul>
      </section>
    </main>
  );
}

export default Main;
