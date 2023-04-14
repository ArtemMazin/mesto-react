import '../index.css';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import ImagePopup from './ImagePopup.jsx';
import Main from './Main.jsx';
import PopupWithForm from './PopupWithForm.jsx';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        buttonName="Сохранить"
      >
        <label>
          <input
            className="popup__input popup__input_type_name"
            type="text"
            name="name"
            // value=''
            placeholder="Введите имя"
            required
            minLength="2"
            maxLength="40"
          />
          <span
            className="popup__input-error"
            id="name-error"
          ></span>
          <input
            className="popup__input popup__input_type_job"
            type="text"
            name="job"
            // value=''
            placeholder="Введите профессию"
            required
            minLength="2"
            maxLength="200"
          />
          <span
            className="popup__input-error"
            id="job-error"
          ></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="cards"
        buttonName="Создать"
      >
        <label>
          <input
            className="popup__input popup__input_type_name"
            id="name-cards__input"
            type="text"
            name="cards_input_name"
            // value=''
            placeholder="Введите название"
            required
            minLength="2"
            maxLength="30"
          />
          <span
            className="popup__input-error"
            id="cards_input_name-error"
          ></span>
          <input
            className="popup__input popup__input_type_job"
            id="link-cards__input"
            type="url"
            name="cards_input_link"
            // value=''
            placeholder="Введите ссылку"
            required
          />
          <span
            className="popup__input-error"
            id="cards_input_link-error"
          ></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        buttonName="Сохранить"
      >
        <label>
          <input
            className="popup__input popup__input_type_name"
            name="avatar"
            type="url"
            // value=''
            placeholder="Введите ссылку на изображение"
            required
          />
          <span
            className="popup__input-error"
            id="avatar-error"
          ></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        title="Вы уверены?"
        name="delete"
        buttonName="Да"
      ></PopupWithForm>
      <ImagePopup />
      <template id="card-template">
        <li className="cards__item">
          <button
            className="cards__remove-icon"
            type="button"
          ></button>
          <img
            src="./images/preview.png"
            alt="Название места"
            className="cards__image"
          />
          <div className="cards__description">
            <h2 className="cards__text"></h2>
            <div>
              <button
                className="cards__like"
                type="button"
              ></button>
              <p className="cards__like-count"></p>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
