import './mobile-menu.scss';

import { ReactComponent as CloseIcon } from '../../images/icon-close.svg';

const MobileMenu = ({ toggleMenu, menuOpen }) => (
  <div className={`mobile-menu${!menuOpen ? ' mobile-menu--translated' : ''}`}>
    <button onClick={toggleMenu} className="mobile-menu__close">
      <CloseIcon />
    </button>
    <nav className="mobile-menu__nav">
      <ul className="mobile-menu__items">
        <li className="mobile-menu__item">collections</li>
        <li className="mobile-menu__item">Men</li>
        <li className="mobile-menu__item">Women</li>
        <li className="mobile-menu__item">About</li>
        <li className="mobile-menu__item">Contact</li>
      </ul>
    </nav>
  </div>
);

export default MobileMenu;
