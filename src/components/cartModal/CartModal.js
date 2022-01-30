import './cart-modal.scss';

import { useSelector } from 'react-redux';
import CartItem from '../cartItem/CartItem';
import PrimaryButton from '../primaryButton/PrimaryButton';

const CartModal = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="cart-modal">
      <span className="cart-modal__title">Cart</span>
      <ul className="cart-modal__items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <h4 className="cart-modal__message">Your cart is empty</h4>
        )}

        {cartItems.length ? (
          <PrimaryButton className="cart-modal__button" type="button">
            Checkout
          </PrimaryButton>
        ) : null}
      </ul>
    </div>
  );
};

export default CartModal;
