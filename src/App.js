import Header from './components/header/Header';
import ProductInfo from './components/product-info/ProductInfo';
import ProductShowcase from './components/productShowcase/ProductShowcase';

import './styles/app.scss';

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <ProductShowcase />
        <ProductInfo />
      </main>
    </div>
  );
}

export default App;
