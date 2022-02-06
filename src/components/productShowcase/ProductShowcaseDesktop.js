import './product-showcase-desktop.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { images } from './productImages';

const ProductShowcaseDesktop = () => (
  <Carousel
    className="product-showcase-desktop"
    showIndicators={false}
    showStatus={false}
  >
    {images.map((image) => (
      <div key={1}>
        <img alt="product" src={image} />
      </div>
    ))}
  </Carousel>
);

export default ProductShowcaseDesktop;
