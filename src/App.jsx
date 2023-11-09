import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {
  const [pegaNomeUsuario, setPegaNomeUsuario] = useState('');
  const [nomeUsuarioFinal, setNomeUsuarioFinal] = useState('');
  const [acesso, setAcesso] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAcesso(false);
    if (pegaNomeUsuario.length > 4) {
      setAcesso(true);
      setNomeUsuarioFinal(pegaNomeUsuario)
    }
  }
  return (
    <>
      <div className="header">
        <form className="inserir-usuario" onSubmit={handleSubmit}>
          <label htmlFor="">Insira aqui seu nome de usuário do GitHub</label>
          <div>
            <input type="text" onChange={(e) => setPegaNomeUsuario(e.target.value)}/>
            <button>acessar</button>
          </div>
        </form>
      </div>
      {acesso && (
        <>
          <Perfil nomeUsuarioFinal={nomeUsuarioFinal} />
          <ReposList nomeUsuarioFinal={nomeUsuarioFinal} />
        </>
      )}
    </>
  )
}

export default App
