import './quantity-button.scss';
import { ReactComponent as DecrementIcon } from '../../images/icon-minus.svg';
import { ReactComponent as IncrementIcon } from '../../images/icon-plus.svg';

const QuantityButton = () => (
  <div className="quantity-button">
    <button type="button" className="quantity-button__decrement">
      <DecrementIcon />
    </button>
    <span className="quantity-button__amount">3</span>
    <button type="button" className="quantity-button__increment">
      <IncrementIcon />
    </button>
  </div>
);

export default QuantityButton;
