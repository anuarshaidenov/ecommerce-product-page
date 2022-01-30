import './product-info.scss';

import QuantityButton from '../quantityButton/QuantityButton';
import PrimaryButton from '../primaryButton/PrimaryButton';
import { ReactComponent as CartIcon } from '../../images/icon-cart-white.svg';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart';
import { v4 as uuidv4 } from 'uuid';
import image from '../../images/image-product-1-thumbnail.jpg';
import { useState } from 'react';

const ProductInfo = () => {
  const [item, setItem] = useState({
    id: '',
    title: 'Fall Limited edition trainers',
    quantity: 1,
    price: 125,
    oldPrice: 250,
    imageUrl: image,
    description:
      'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.',
  });

  const dispatch = useDispatch();

  const addItemToCartHandler = () =>
    dispatch(addItemToCart({ ...item, id: uuidv4() }));
  const handleIncrementQuantity = () =>
    setItem({ ...item, quantity: item.quantity + 1 });
  const handleDecrementQuantity = () =>
    setItem({ ...item, quantity: item.quantity - 1 });

  return (
    <section className="product-info container">
      <h4 className="product-info__company">Sneaker company</h4>
      <h2 className="product-info__name">{item.title}</h2>
      <p className="product-info__description">{item.description}</p>
      <div className="product-info__prices">
        <div className="product-info__price-current">
          <span className="product-info__price">${item.price}.00</span>
          <span className="product-info__sale">50%</span>
        </div>
        <span className="product-info__price-old">${item.oldPrice}.00</span>
      </div>
      <QuantityButton
        quantity={item.quantity}
        handleIncrementQuantity={handleIncrementQuantity}
        handleDecrementQuantity={handleDecrementQuantity}
      />
      <PrimaryButton type="button" onClick={addItemToCartHandler}>
        <CartIcon /> Add to Cart
      </PrimaryButton>
    </section>
  );
};

export default ProductInfo;
