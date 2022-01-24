import './product-info.scss';

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
    <div className="product-info__quantity">
      <button className="product-info__decrement">-</button>
      <span>3</span>
      <button className="product-info__increment">+</button>
    </div>
    <button className="product-info__add-btn">Add to cart</button>
  </section>
);

export default ProductInfo;
