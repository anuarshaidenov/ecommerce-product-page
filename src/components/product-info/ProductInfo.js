import './product-info.scss';

const ProductInfo = () => (
  <section>
    <h4>Sneaker company</h4>
    <h2>Fall Limited edition sneakers</h2>
    <p>
      These low profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they will withstand everything the
      weather can offer.
    </p>
    <div>
      <div>
        <span>$125.00</span>
        <span>50%</span>
      </div>
      <span>$250.00</span>
    </div>
    <div>
      <button>-</button>
      <span>3</span>
      <button>+</button>
    </div>
    <button>Add to cart</button>
  </section>
);

export default ProductInfo;
