import './header.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as HamburgerIcon } from '../../images/icon-menu.svg';
import { ReactComponent as CartIcon } from '../../images/icon-cart.svg';
import avatar from '../../images/image-avatar.png';
import MobileMenu from '../mobileMenu/MobileMenu';
import { useState } from 'react';
import Backdrop from '../backdrop/Backdrop';
import CartModal from '../cartModal/CartModal';

const Header = () => {
  const [menuOpen, setMenu] = useState(false);
  const [cartOpen, setCart] = useState(false);

  const toggleMenu = () => {
    setMenu(!menuOpen);
    document.body.classList.toggle('no-scroll');
  };

  const toggleCart = () => setCart(!cartOpen);

  return (
    <header className="header container">
      <MobileMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
      {menuOpen && <Backdrop onClick={toggleMenu} />}
      {cartOpen && <CartModal />}
      {cartOpen && <Backdrop isCart={true} onClick={toggleCart} />}
      <div className="header__left">
        <button onClick={toggleMenu} className="header__button-hamburger">
          <HamburgerIcon className="header__hamburger" />
        </button>
        <Logo className="header__logo" />
        <nav className="header__nav">
          <ul className="header__nav-links">
            <li className="header__nav-link">Collections</li>
            <li className="header__nav-link">Men</li>
            <li className="header__nav-link">Women</li>
            <li className="header__nav-link">About</li>
            <li className="header__nav-link">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="header__right">
        <button className="header__button-cart" onClick={toggleCart}>
          <CartIcon className="header__cart" />
        </button>
        <img src={avatar} alt="Avatar" className="header__avatar" />
      </div>
    </header>
  );
};

export default Header;
