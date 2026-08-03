import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Carrinho from './pages/Carrinho'
import ProdutoDetalhe from './pages/ProdutoDetalhe'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="perfil" element={<Perfil />} />
            <Route path="carrinho" element={<Carrinho />} />
            <Route path="produto/:id" element={<ProdutoDetalhe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

createRoot(document.getElementById('root')).render(<App />)