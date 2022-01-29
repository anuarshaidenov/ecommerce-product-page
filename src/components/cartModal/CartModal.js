import './cart-modal.scss';

const CartModal = () => (
  <div className="cart-modal">
    <span className="cart-modal__title">Cart</span>
    <ul className="cart-modal__items">
      <h4 className="cart-modal__message">Your cart is empty</h4>
    </ul>
  </div>
);

export default CartModal;
