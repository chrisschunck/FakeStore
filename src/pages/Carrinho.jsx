import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export default function Carrinho() {
  const navigate = useNavigate()
  const { cart, removeFromCart, clearCart, cartTotal } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-2">Carrinho</h2>
        <p className="mb-4">Seu carrinho está vazio.</p>
        <button className="px-4 py-2 border rounded" onClick={() => navigate('/')}>Voltar para Home</button>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Carrinho</h2>
      <div className="space-y-4 mb-6">
        {cart.map(item => (
          <div key={item.id} className="border rounded p-4">
            <div className="flex justify-between items-start gap-4">
              <div className="flex items-center justify-center p-6">
                <img src={item.image} alt={item.image} className="max-h-36 object-contain" />
              </div>
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-600">Qtd: {item.quantity}</p>
                <p className="text-sm">R$ {Number(item.price).toFixed(2)}</p>
              </div>
              <button
                className="px-3 py-1 border rounded text-sm"
                onClick={() => removeFromCart(item.id)}
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <p className="font-semibold">Total: R$ {cartTotal.toFixed(2)}</p>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 border rounded" onClick={() => navigate('/')}>Voltar para Home</button>
        <button className="px-4 py-2 bg-black text-white rounded" onClick={clearCart}>Limpar carrinho</button>
      </div>
    </div>
  )
}
