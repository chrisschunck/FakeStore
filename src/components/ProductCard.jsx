import { FaStar } from 'react-icons/fa'

export default function ProductCard({product}){
  const rating = product?.rating?.rate || 0
  const stars = Array.from({length:5}).map((_,i)=> i+1 <= Math.round(rating))
  return (
    <div className="card p-3 flex flex-col h-full">
      <div className="flex-1 flex items-center justify-center p-4">
        <img src={product.image} alt={product.title} className="max-h-40 object-contain" />
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
        <div className="mt-3 flex items-center justify-between">
          <div className="">R$ {Number(product.price).toFixed(2)}</div>
          <button className="btn-yellow px-3 py-1 text-xs rounded">Ver detalhes</button>
        </div>
      </div>
    </div>
  )
}