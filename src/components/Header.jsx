import logo from '../images/logo.svg';

function Header(props) {
  return (
    <header className='header wrapper'>
      <img
        src={logo}
        alt='Логотип проекта: Место'
        className='header__logo'
      />
    </header>
  );
}

export default Header;