import Header from './components/header/Header';
import ProductInfo from './components/product-info/ProductInfo';
import ProductShowcase from './components/productShowcase/ProductShowcase';
import ProductShowcaseDesktop from './components/productShowcase/ProductShowcaseDesktop';

import './styles/app.scss';

function App() {
  return (
    <div>
      <Header />
      <main className="main container container--small">
        <ProductShowcaseDesktop />
        <ProductShowcase />
        <ProductInfo />
      </main>
    </div>
  );
}

export default App;
