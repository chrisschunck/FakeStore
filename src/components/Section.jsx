export default function Section({title, items}){
  return (
    <section className="mb-8">
      <div className="bg-black text-yellow-400 py-2 mb-3 text-center font-semibold">{title}</div>
      <div className="text-center text-xs text-gray-500 mb-4">Produtos em destaque</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map(p=> (
          <div key={p.id}>
            {/* card is rendered by caller or can import ProductCard */}
            {p._card}
          </div>
        ))}
      </div>
    </section>
  )
}