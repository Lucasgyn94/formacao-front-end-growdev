import axios from "axios";
import { useEffect, useState } from "react"

interface IRepository {
    id: number,
    name: string
}

export function App() {

    const [repositories, setRepositories] = useState<IRepository[]>([]);

    async function fetchRepositories() {
        const response = await axios.get(
            'https://api.github.com/users/Lucasgyn94/repos'
        );
        setRepositories(response.data);
    }

    useEffect(() => {
        fetchRepositories();
    },[]);

    return (
        <>
            {repositories.map((repository) => (
                <p key={repository.id}>{repository.name}</p>
            ))}
        </>
    )
}