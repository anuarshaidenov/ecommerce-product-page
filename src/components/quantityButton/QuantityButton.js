import './quantity-button.scss';

const QuantityButton = () => (
  <div className="quantity-button">
    <button type="button" className="quantity-button__decrement">
      -
    </button>
    <span className="quantity-button__amount">3</span>
    <button type="button" className="quantity-button__increment">
      +
    </button>
  </div>
);

export default QuantityButton;
