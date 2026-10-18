import { useContador } from "./useContador"

export function App() {
  const { contador, incrementar, decrementar, reiniciar } = useContador(0);
  
  return (
    <>
      <h1>Contador: {contador}</h1>

      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={reiniciar}>Reinciar</button>
    </>
  )
}