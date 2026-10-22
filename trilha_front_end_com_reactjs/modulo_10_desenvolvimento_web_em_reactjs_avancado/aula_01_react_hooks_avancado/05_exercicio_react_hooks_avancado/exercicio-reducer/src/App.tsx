import { useReducer, type ChangeEvent } from "react";

interface Estado {
  nome: string,
  email: string
}

type Acao = 
  | { tipo: "atualizarCampo"; campo: "nome" | "email"; valor: string }
  | { tipo: "reiniciar" }

const estadoInicial: Estado = {
  nome: "",
  email: ""
};

const formularioReducer = (estado: Estado, acao: Acao) => {
  switch(acao.tipo) {
    case "atualizarCampo":
      return {...estado, [acao.campo]: acao.valor};
    case "reiniciar":
      return estadoInicial
    default: 
      return estado;
  }
}
export function App() {

  const [ estado, enviar ] = useReducer(formularioReducer, estadoInicial);

  const handleMudar = (evento: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target;
    enviar({tipo: "atualizarCampo", campo: name as "nome" | "email", valor: value});
  }

  const handleReinciar = () => {
    enviar({ tipo: "reiniciar" });
  }
  return (

    <>
      <h2>Formulário</h2>

      <form>
        <div>
          <label>Nome: </label>
          <input 
            type="text" 
            name="nome" 
            value={estado.nome} 
            onChange={handleMudar} 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={estado.email} 
            onChange={handleMudar} 
          />
        </div>

        <button type="button" onClick={handleReinciar}>Reinciar</button>
      </form>
      
      <h3>Dado do formulário:</h3>
      <p>Nome: {estado.nome}</p>
      <p>Email: {estado.email}</p>
    </>
  );
}

