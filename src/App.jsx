import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Layout from './components/Layout'
import ItemListContainer from './components/ItemListContainer';
import ItemView from './components/ItemView';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path='/' element={<ItemListContainer />}/>
          <Route path='/category/:tipo' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={ <ItemView/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
