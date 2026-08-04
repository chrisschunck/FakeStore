import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export default function Carrinho() {
  const [loading, setLoading] = useState([])
  const [product, setProduct] = useState([])
  const [cart, setCart] = useState([])
  const [gateway, setGateway] = useState([])
  const [navigate, setNavigate] = useState([])
  const navigate = useNavigate()

  if (gateway.length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-2">Pedidos</h2>
        <p className="mb-4">Nenhuma compra realizada.</p>
        <button className="px-4 py-2 border rounded" onClick={() => navigate('/')}>Voltar para Home</button>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Pedidos</h2>
      <div className="space-y-4 mb-6">
        {gateway.map(item => (
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
            </div>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <p className="font-semibold">Total: R$ {gatewayTotal.toFixed(2)}</p>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 border rounded" onClick={() => navigate('/')}>Voltar para a Home</button>
      </div>
    </div>
  )
}
