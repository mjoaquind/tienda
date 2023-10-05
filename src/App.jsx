import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Layout from './components/Layout'
import ItemListContainer from './components/ItemListContainer';
import ItemCounter from './components/ItemCounter';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<h1>Home</h1>}/>
          <Route path='/category/:id' element={<h1>About</h1>}/>
          <Route path='/item/:id' element={<h1>Not Found</h1>}/>
        </Routes>
        <ItemCounter/>
        <ItemListContainer/>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
