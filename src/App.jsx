import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Layout from './components/Layout'
import ItemListContainer from './components/ItemListContainer';
import ItemView from './components/ItemView';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<ItemListContainer titulo={"Listado de Productos"}/>}/>
          <Route path='/category/:nombre' element={<h1>About</h1>}/>
          <Route path='/item/:id' element={<ItemView/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
