import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export default function Carrinho() {
  const navigate = useNavigate()
  const { cart, alterFromCart, clearCart, cartTotal } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-2">Carrinho</h2>
        <p className="mb-4">Seu carrinho está vazio.</p>
        <button className="px-4 py-2 border rounded" onClick={() => navigate('/')}>
          Voltar para Home
        </button>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Carrinho</h2>
      <div className="space-y-4 mb-6">
        {cart.map(item => (
          <div key={item.id} className="border rounded p-4">
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center justify-center p-2">
                <img src={item.image} alt={item.title} className="max-h-24 object-contain" />
              </div>
              <div className="flex-1">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-600">Qtd: {item.quantity}</p>
                <p className="text-sm">R$ {(Number(item.quantity) * Number(item.price)).toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  className="px-3 py-1 border rounded text-sm bg-gray-100 hover:bg-gray-200"
                  onClick={() => alterFromCart(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="text-sm font-medium px-2">{item.quantity}</span>
                <button 
                  className="px-3 py-1 border rounded text-sm bg-gray-100 hover:bg-gray-200"
                  onClick={() => alterFromCart(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <p className="font-semibold">Total: R$ {cartTotal.toFixed(2)}</p>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 border rounded" onClick={() => navigate('/')}>
          Continuar comprando
        </button>
        <button className="px-4 py-2 bg-black text-white rounded" onClick={clearCart}>
          Limpar carrinho
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={() => navigate('/gateway')}>
          Ir para o pagamento
        </button>
      </div>
    </div>
  )
}
