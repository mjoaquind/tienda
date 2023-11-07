import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Category from './pages/Category';
import Prodcut from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path='/' element={<Home />}/>
          <Route path='/category/:tipo' element={<Category />}/>
          <Route path='/item/:id' element={ <Prodcut />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
