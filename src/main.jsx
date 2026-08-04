import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Conta from './pages/Conta'
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
            <Route path="carrinho" element={<Carrinho />} />
            <Route path="produto/:id" element={<ProdutoDetalhe />} />
            <Route path="conta" element={<Conta />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

createRoot(document.getElementById('root')).render(<App />)
