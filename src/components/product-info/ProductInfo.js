import './product-info.scss';

import QuantityButton from '../quantityButton/QuantityButton';
import PrimaryButton from '../primaryButton/PrimaryButton';
import { ReactComponent as CartIcon } from '../../images/icon-cart-white.svg';

const ProductInfo = () => (
  <section className="product-info">
    <h4 className="product-info__company">Sneaker company</h4>
    <h2 className="product-info__name">Fall Limited edition sneakers</h2>
    <p className="product-info__description">
      These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they will withstand everything the
      weather can offer.
    </p>
    <div className="product-info__prices">
      <div className="product-info__price-current">
        <span className="product-info__price">$125.00</span>
        <span className="product-info__sale">50%</span>
      </div>
      <span className="product-info__price-old">$250.00</span>
    </div>
    <QuantityButton />
    <PrimaryButton>
      <CartIcon /> Add to Cart
    </PrimaryButton>
  </section>
);

export default ProductInfo;
