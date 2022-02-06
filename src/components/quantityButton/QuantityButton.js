import './quantity-button.scss';
import { ReactComponent as DecrementIcon } from '../../images/icon-minus.svg';
import { ReactComponent as IncrementIcon } from '../../images/icon-plus.svg';

const QuantityButton = ({
  quantity,
  handleIncrementQuantity,
  handleDecrementQuantity,
  className,
}) => (
  <div className={`quantity-button ${className ? className : ''}`}>
    <button
      type="button"
      className="quantity-button__decrement"
      onClick={handleDecrementQuantity}
    >
      <DecrementIcon />
    </button>
    <span className="quantity-button__amount">{quantity}</span>
    <button
      type="button"
      className="quantity-button__increment"
      onClick={handleIncrementQuantity}
    >
      <IncrementIcon />
    </button>
  </div>
);

export default QuantityButton;
