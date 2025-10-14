import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL || 'https://fakestoreapi.com'

export default function ProdutoDetalhe(){
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    async function load(){
      try{
        setLoading(true)
        const res = await fetch(`${API}/products/${id}`)
        const data = await res.json()
        setProduct(data)
      }catch(err){
        console.error(err)
      }finally{
        setLoading(false)
      }
    }
    load()
  },[id])

  if(loading) return <p>Carregando</p>
  if(!product) return <p>Produto não encontrado</p>

  return (
    <div className="max-w-4xl mx-auto card p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center justify-center p-6">
          <img src={product.image} alt={product.title} className="max-h-96 object-contain" />
        </div>
        <div>
          <h1 className="text-2xl mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.category}</p>
          <p className="text-lg mb-4">R$ {Number(product.price).toFixed(2)}</p>
          <p className="mb-4">{product.description}</p>
          <div className="flex items-center space-x-3">
            <button className="btn-yellow px-4 py-2 rounded font-sm">Adicionar ao carrinho</button>
            <button className="px-4 py-2 border rounded">Voltar</button>
          </div>
        </div>
      </div>
    </div>
  )
}