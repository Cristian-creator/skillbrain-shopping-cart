import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import ProductPage from './pages/product';
import NotFoundPage from './pages/not-found';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';

function App() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
      });
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage products={products} />} />
          <Route path='/product-details/:productId' element={<ProductPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
