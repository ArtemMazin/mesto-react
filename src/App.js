import './index.css';
import logo from './images/logo.svg';

function App() {
  return (
    <body class='body'>
      <header class='header wrapper'>
        <img
          src={logo}
          alt='Логотип проекта: Место'
          class='header__logo'
        />
      </header>
      <main class='main wrapper'>
        <section class='profile'>
          <div class='profile__content'>
            <div class='profile__avatar-container'>
              <img
                src="<%=require('./images/kusto.jpg')%>"
                alt='Аватар профиля'
                class='profile__avatar'
              />
            </div>

            <div class='profile__info'>
              <div class='profile__description'>
                <h1 class='profile__name'></h1>
                <button
                  class='profile__edit-button'
                  type='button'></button>
              </div>
              <p class='profile__job'></p>
            </div>
          </div>
          <button
            class='profile__add-button'
            type='button'></button>
        </section>
        <section class='cards'>
          <ul class='cards__items'></ul>
        </section>
      </main>
      <footer class='footer wrapper'>
        <p class='footer__copyright'>&copy; 2023 Mesto Russia</p>
      </footer>

      <template id='card-template'>
        <li class='cards__item'>
          <button
            class='cards__remove-icon'
            type='button'></button>
          <img
            src='./images/preview.png'
            alt='Название места'
            class='cards__image'
          />
          <div class='cards__description'>
            <h2 class='cards__text'></h2>
            <div>
              <button
                class='cards__like'
                type='button'></button>
              <p class='cards__like-count'></p>
            </div>
          </div>
        </li>
      </template>
      <div
        class='popup popup_background_light'
        id='popup-profile'>
        <div class='popup__container'>
          <h2 class='popup__title'>Редактировать профиль</h2>
          <form
            class='popup__form'
            name='form_profile'
            id='form-profile'
            novalidate>
            <input
              class='popup__input popup__input_type_name'
              type='text'
              name='name'
              value=''
              placeholder='Введите имя'
              required
              minlength='2'
              maxlength='40'
            />
            <span
              class='popup__input-error'
              id='name-error'></span>
            <input
              class='popup__input popup__input_type_job'
              type='text'
              name='job'
              value=''
              placeholder='Введите профессию'
              required
              minlength='2'
              maxlength='200'
            />
            <span
              class='popup__input-error'
              id='job-error'></span>
            <button
              class='popup__button-submit popup__button-submit_disabled'
              type='submit'>
              Сохранить
            </button>
          </form>
          <button
            class='popup__close-btn'
            type='button'></button>
        </div>
      </div>
      <div
        class='popup popup_background_light'
        id='popup-cards'>
        <div class='popup__container'>
          <h2 class='popup__title'>Новое место</h2>
          <form
            class='popup__form'
            name='form_cards'
            id='form-cards'
            novalidate>
            <input
              class='popup__input popup__input_type_name'
              id='name-cards__input'
              type='text'
              name='cards_input_name'
              value=''
              placeholder='Введите название'
              required
              minlength='2'
              maxlength='30'
            />
            <span
              class='popup__input-error'
              id='cards_input_name-error'></span>
            <input
              class='popup__input popup__input_type_job'
              id='link-cards__input'
              type='url'
              name='cards_input_link'
              value=''
              placeholder='Введите ссылку'
              required
            />
            <span
              class='popup__input-error'
              id='cards_input_link-error'></span>
            <button
              class='popup__button-submit popup__button-submit_disabled'
              type='submit'>
              Создать
            </button>
          </form>
          <button
            class='popup__close-btn'
            type='button'
            id='popup-cards__close-btn'></button>
        </div>
      </div>
      <div
        class='popup popup_background_light'
        id='popup-avatar'>
        <div class='popup__container'>
          <h2 class='popup__title'>Обновить аватар</h2>
          <form
            class='popup__form'
            name='form_avatar'
            id='form-avatar'
            novalidate>
            <input
              class='popup__input popup__input_type_name'
              name='avatar'
              type='url'
              value=''
              placeholder='Введите ссылку на изображение'
              required
            />
            <span
              class='popup__input-error'
              id='avatar-error'></span>
            <button
              class='popup__button-submit popup__button-submit_disabled'
              type='submit'>
              Сохранить
            </button>
          </form>
          <button
            class='popup__close-btn'
            type='button'></button>
        </div>
      </div>
      <div
        class='popup popup_background_light'
        id='popup-delete'>
        <div class='popup__container'>
          <h2 class='popup__title'>Вы уверены?</h2>
          <form
            class='popup__form'
            name='form_delete'
            id='form-delete'
            novalidate>
            <button
              class='popup__button-submit'
              type='submit'>
              Да
            </button>
          </form>
          <button
            class='popup__close-btn'
            type='button'></button>
        </div>
      </div>
      <div
        class='popup popup_background_dark'
        id='popup-image'>
        <div class='popup__image-container'>
          <img
            src='#'
            class='popup__image'
            alt='Изображение места'
          />
          <p class='popup__description'></p>
          <button
            class='popup__close-btn'
            type='button'></button>
        </div>
      </div>
    </body>
  );
}

export default App;
