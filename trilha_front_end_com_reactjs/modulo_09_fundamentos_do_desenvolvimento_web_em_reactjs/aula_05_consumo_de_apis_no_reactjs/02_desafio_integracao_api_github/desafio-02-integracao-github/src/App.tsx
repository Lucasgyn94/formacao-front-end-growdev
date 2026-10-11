import axios from "axios";
import { useState, type ChangeEvent } from "react"

interface IRepository {
    name: string,
    html_url: string,
    description: string
}
export function App() {
    const [userName, setUsername] = useState('');
    const [repositories, setRepositories] = useState<IRepository[]>([]);
    const [filteredRepositories, setFilteredRepositories] = useState<IRepository[]>([]);

    async function fetchRepositories(): Promise<void> {
        try {
            const response = await axios.get<IRepository[]>(`https://api.github.com/users/${userName}/repos`);
            
            setRepositories(response.data);
            setFilteredRepositories(response.data);

        } catch {
            console.log("Erro ao buscar repositórios");
        }
        
    }

    function handleSearch(event: ChangeEvent<HTMLInputElement>) {
        const query = event.target.value.toLowerCase();
        const filtered = repositories.filter(repository => repository.name.toLowerCase().includes(query));

        setFilteredRepositories(filtered);
        
    }
    
    return (
        <>
            <h1>Pesquisar repositórios do Github</h1>
            <input 
                type="text" 
                value={userName}
                onChange={(event) => setUsername(event.target.value)} 
                placeholder="Digite o nome de usuário"
            />
            <button onClick={fetchRepositories}>Buscar Repositórios</button>
            
            {repositories.length > 0 && (
                <input 
                    type="text" 
                    onChange={handleSearch} 
                    placeholder="Pesquisar repositório"
                />
            )}

            {filteredRepositories.length > 0 && (
                <ul>
                    {filteredRepositories.map(repo => (
                        <li key={repo.name}>
                            <a href={repo.html_url} target="_blank">
                                {repo.name}
                            </a>
                            <p>{repo.description || "Sem descrição"}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}