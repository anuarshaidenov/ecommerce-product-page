import './header.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as HamburgerIcon } from '../../images/icon-menu.svg';
import { ReactComponent as CartIcon } from '../../images/icon-cart.svg';
import avatar from '../../images/image-avatar.png';

const Header = () => (
  <header className="header container">
    <div className="header__left">
      <button className="header__button-hamburger">
        <HamburgerIcon className="header__hamburger" />
      </button>
      <Logo className="header__logo" />
    </div>
    <div className="header__right">
      <button className="header__button-cart">
        <CartIcon className="header__cart" />
      </button>
      <img src={avatar} alt="Avatar" className="header__avatar" />
    </div>
  </header>
);

export default Header;
