import { Outlet, Link } from 'react-router-dom'

export default function MainLayout(){
  return (
    <div className="min-h-screen flex flex-col">
      <div className="header-top">
        <div className="container mx-auto px-4 py-1 text-sm">FakeStore Explorer</div>
      </div>
      <header className="header-bar">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-yellow-400 font-bold">FakeStore Explorer</h1>
          <nav className="text-sm space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/perfil" className="hover:underline">Perfil</Link>
            <Link to="/carrinho" className="hover:underline">Carrinho</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>

      <footer className="bg-white border-t mt-8">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-600">
          Desenvolvido para CP2 - FakeStore Explorer
        </div>
      </footer>
    </div>
  )
}