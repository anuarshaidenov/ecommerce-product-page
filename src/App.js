import Header from './components/header/Header';
import ProductInfo from './components/product-info/ProductInfo';

import './styles/app.scss';

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <ProductInfo />
      </main>
    </div>
  );
}

export default App;
