import './cart-item.scss';

import { ReactComponent as TrashLogo } from '../../images/icon-delete.svg';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../redux/cart/cart';

const CartItem = ({ cartItem: { id, title, imageUrl, price, quantity } }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => dispatch(removeItemFromCart(id));

  return (
    <li className="cart-item">
      <img className="cart-item__img" alt="product" src={imageUrl} />
      <div className="cart-item__info">
        <span className="cart-item__title">{title}</span>
        <span className="cart-item__price-singular">
          ${price} x {quantity}
        </span>
        <span className="cart-item__price-total">${price * quantity}</span>
      </div>
      <button
        className="cart-item__remove"
        type="button"
        onClick={handleRemoveItem}
      >
        <TrashLogo />
      </button>
    </li>
  );
};

export default CartItem;
