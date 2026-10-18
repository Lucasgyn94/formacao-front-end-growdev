import { useReducer } from "react";

interface Estado {
  contador: number;
}

type Acao = 
  {tipo: 'incrementar'} | 
  {tipo: 'decrementar'} | 
  {tipo: 'reiniciar'}
;

const estadoInicial: Estado = { contador: 0 };

function redutorContador(estadoAtual: Estado, acao: Acao): Estado {
  switch (acao.tipo){
    case 'incrementar':
      return {contador: estadoAtual.contador + 1};

    case 'decrementar':
      return {contador: estadoAtual.contador - 1};
    case 'reiniciar':
      return {contador: 0};
    default:
      return estadoAtual;
  }
}

export function App() {
  const [estado, enviar] = useReducer(redutorContador, estadoInicial);
  
  return (
    <>
      <h1>Contador: {estado.contador}</h1>
      <button onClick={() => enviar({tipo: "incrementar"})}>Incrementar</button>
      <button onClick={() => enviar({tipo: "decrementar"})}>Decrementar</button>
      <button onClick={() => enviar({tipo: "reiniciar"})}>Reiniciar</button>
    </>
  )
}