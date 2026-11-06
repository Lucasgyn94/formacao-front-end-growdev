import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useState } from "react";
import { fetchRepositories } from "../store/slices/repositoriesSlice";

export function RepositoryList() {
    const dispatch = useAppDispatch();

    const { repositories, loading, error } = useAppSelector(state => state.repositories);

    const [username, setUsername] = useState('');

    const [hasSearched, setHasSearched] = useState(false);
    
    function handleSearch() {
        if (!username.trim()) {
            return;
        }

        setHasSearched(true);
        dispatch(fetchRepositories(username.trim()));
    }


    return (
        <>
            <h1>Buscar repositórios do Github</h1>
            <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite o nome do usuário" 
            />

            <button onClick={handleSearch}>Buscar</button>

            {loading && <p>Carregando...</p>}

            {error && <p>{error}</p>}


            {hasSearched && !loading && !error && repositories.length === 0 && (
                <p>Nenhum repositório público encontrado.</p>
            )}

            <ul>
                {repositories.map((repository) => (
                    <li key={repository.id}>
                        <a href={repository.html_url}>
                            {repository.name}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}