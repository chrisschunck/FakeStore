export default function Perfil(){
  return (
    <div className="header-top"
      <div className="text-black-700 container mx-auto py-1 px-4 bg-white text-sm">FakeStore Explorer</div>
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-2">Perfil</h2>
      <p>Digite seu e-mail ou telefone para iniciar sessão ou se não registre-se.</p>
    </div>
    <div className="card">
      <div className="gap-4 py-20">
        <label for>e-mail ou telefone</label>
        <input type="text" placeholder="digite seu email">E-mail</input>
        <label for="">senha</label>
        <input type="text" className="" placeholder="digite sua senha">Senha</input>
        <button className="bg-yellow text-black" onClick="login()">Entrar</button>
        <button className="bg-black text-yellow" onClick="register()">Criar Conta</button>
        <hr className="">Ou</hr>
      </div>
    </div>
  )
}
