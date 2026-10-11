import axios from "axios";
import { useEffect, useState } from "react"

interface IRepository {
    id: number,
    name: string
}

export function App() {
    const [repositories, setRepositories] = useState<IRepository[]>([]);

    useEffect(() => {
        async function fetchRepositories() {
            try {
                const response = await axios.get(
                    'https://api.github.com/users/Lucasgyn94/repos'
                );
                setRepositories(response.data);
            } catch (error) {
                console.error("Erro ao buscar repositórios:", error);
            }
        }

        fetchRepositories();
    }, []); 

    return (
        <>
            {repositories.map((repository) => (
                <p key={repository.id}>{repository.name}</p>
            ))}
        </>
    )
}