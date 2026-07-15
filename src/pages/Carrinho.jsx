export default function Carrinho(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Carrinho</h2>
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>Qtd: {item.quantity}</p>
        </div>
      ))}
    </>
  );
  <button onClick={() => navigate("/")}>
    Voltar para Home
  </button>
    </div>
  )
}
