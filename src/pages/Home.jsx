import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL || 'https://fakestoreapi.com'

export default function Home(){
  const [electronics, setElectronics] = useState([])
  const [jewelery, setJewelery] = useState([])
  const [clothing, setClothing] = useState([])
  const [loading, setLoading] = useState(true)
  const [card, setCard] = useState([])

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
};
  
  useEffect(()=>{
    async function load(){
      setLoading(true)
      try{
        const [e,j,c] = await Promise.all([
          fetch(`${API}/products/category/electronics`).then(r=>r.json()),
          fetch(`${API}/products/category/jewelery`).then(r=>r.json()),
          fetch(`${API}/products/category/men's clothing`).then(r=>r.json())
        ])
        setElectronics(e)
        setJewelery(j)
        setClothing(c)
      }catch(err){
        console.error(err)
      }finally{
        setLoading(false)
      }
    }
    load()
  },[])

  if(loading) return <p>Carregando produtos...</p>

  return (
    <div>
      <section className="mb-8">
        <div className="bg-black text-yellow-600 py-2 mb-3 text-center font-semibold">Eletrônicos</div>
        <div className="text-center text-xs text-gray-500 mb-4">Produtos em destaque</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {electronics.map(p=> (
            <Link to={`/produto/${p.id}`} key={p.id}><ProductCard product={p} /></Link>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-black text-yellow-400 py-2 mb-3 text-center font-semibold">Joias</div>
        <div className="text-center text-xs text-gray-500 mb-4">Produtos em destaque</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {jewelery.map(p=> (
            <Link to={`/produto/${p.id}`} key={p.id}><ProductCard product={p} /></Link>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-black text-yellow-400 py-2 mb-3 text-center font-semibold">Roupas Masculinas</div>
        <div className="text-center text-xs text-gray-500 mb-4">Produtos em destaque</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clothing.map(p=> (
            <Link to={`/produto/${p.id}`} key={p.id}><ProductCard product={p} /></Link>
          ))}
        </div>
      </section>
    </div>
  )
}
