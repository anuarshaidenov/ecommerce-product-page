import './cart-item.scss';

import { ReactComponent as TrashLogo } from '../../images/icon-delete.svg';

const CartItem = ({ cartItem }) => (
  <li className="cart-item">
    <img className="cart-item__img" alt="product" src={cartItem.imageUrl} />
    <div className="cart-item__info">
      <span className="cart-item__title">{cartItem.title}</span>
      <span className="cart-item__price-singular">
        ${cartItem.price} x {cartItem.quantity}
      </span>
      <span className="cart-item__price-total">
        ${cartItem.price * cartItem.quantity}
      </span>
    </div>
    <TrashLogo />
  </li>
);

export default CartItem;
