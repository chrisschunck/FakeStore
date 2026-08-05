import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Perfil() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = { email, senha };
    localStorage.setItem('usuarioLogado', JSON.stringify(userData));
    console.log('Logado com sucesso:', userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    setEmail('');
    setSenha('');
    console.log('Logout realizado');
  };

  const handleRegister = () => {
    console.log('Navegar para registro ou salvar conta');
  };

  return (
    <>
      <div className="header-top">
        <div className="text-black-700 container mx-auto py-1 px-4 bg-white text-sm">
          FakeStore Explorer
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">Perfil</h2>
        <p>Digite seu e-mail ou telefone para iniciar sessão ou registre-se.</p>
      </div>

      <div className="card">
        <div className="flex flex-col gap-4 py-20">
          
          <label htmlFor="email">E-mail ou telefone</label>
          <input 
            id="email"
            type="text" 
            placeholder="digite seu email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
          />

          <label htmlFor="senha">Senha</label>
          <input 
            id="senha"
            type="password" 
            placeholder="digite sua senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border p-2 rounded"
          />

          <Link to="/">
            <button className="login bg-yellow-400 text-black p-2 rounded w-full" onClick={handleLogin}>
              Entrar
            </button>
          </Link>

          <Link to="/">
            <button className="logout bg-red-500 text-black p-2 rounded w-full" onClick={handleLogout}>
              Sair
            </button>
          </Link>

          <button className="register bg-black text-yellow-400 p-2 rounded" onClick={handleRegister}>
            Criar Conta
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-t" />
            <span className="px-2 text-gray-500">Ou</span>
            <hr className="flex-grow border-t" />
          </div>

        </div>
      </div>
    </>
  );
}
