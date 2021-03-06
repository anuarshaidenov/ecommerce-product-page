import './product-showcase.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { images } from './productImages';

const ProductShowcase = () => (
  <Carousel
    className="product-showcase--mobile"
    showStatus={false}
    showIndicators={false}
    showThumbs={false}
  >
    {images.map((image) => (
      <div key={1} className="product-showcase__image-container">
        <img alt="product" src={image} />
      </div>
    ))}
  </Carousel>
);

export default ProductShowcase;
