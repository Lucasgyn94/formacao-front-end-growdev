import { useState } from 'react';
import axios from 'axios';
 
interface IEndereco {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
}

export function App() {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState<IEndereco | null>(null);

    async function pesquisarEndereco(): Promise<void> {
        try {
            const resposta = await axios.get<IEndereco>(`
                https://viacep.com.br/ws/${cep}/json/
            `);
            setEndereco(resposta.data);            
            
        } catch {
            console.log("Erro ao buscar endereço.");
        }
    }

    return (
        <>
            <h1>Pesquise o endereço pelo CEP</h1>
            <input
                type="text"
                value={cep}
                onChange={(evento) => setCep(evento?.target.value)}
                placeholder="Digite um cep"
            />

            <button onClick={pesquisarEndereco}>Pesquisar</button>

            {endereco && (
                <div>
                    <p><span>Logradouro: </span>{endereco.logradouro}</p>
                    <p><span>Bairro: </span>{endereco.bairro}</p>
                    <p><span>Cidade: </span>{endereco.localidade}</p>
                    <p><span>Estado: </span>{endereco.uf}</p>
                </div>
            )} 
        </>
    );
}
