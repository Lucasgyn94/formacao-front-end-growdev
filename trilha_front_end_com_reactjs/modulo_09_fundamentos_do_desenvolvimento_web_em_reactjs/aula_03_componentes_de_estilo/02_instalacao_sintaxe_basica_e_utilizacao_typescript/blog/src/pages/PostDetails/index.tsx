import { useNavigate, useParams } from 'react-router-dom';
import { posts } from '../../posts';

export function PostDetais() {
    const { id } = useParams();

    const post = posts.find((post) => post.id === Number(id));

    const navigate = useNavigate();

    if (!post) {
        return <p>Post não encontrado!</p>;
    }

    function handleBack() {
        navigate('/');
    }

    return (
        <>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.title} />
            <p>
                <strong>Categoria:</strong> {post.category}
            </p>
            <p>
                <strong>Descrição:</strong> {post.description}
            </p>
            <div>
                <img src={post.avatar} alt={post.author} />
                <p>
                    <strong>Autor:</strong> {post.author}
                </p>
                <p>
                    <strong>Data de criação:</strong> {post.createdAt}
                </p>
            </div>

            <button onClick={handleBack}>Voltar</button>
        </>
    );
}
