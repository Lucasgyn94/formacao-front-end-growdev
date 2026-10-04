import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import type { IPost } from '../../types';
import { Avatar, Button } from './styles';

export function Post({
    id,
    author,
    avatar,
    category,
    createdAt,
    description,
    image,
    title = 'Post Sem título',
    children,
}: IPost): JSX.Element {
    const hasExtraContent = false;

    let likeCount = 0;

    function handleLike(title: string) {
        likeCount++;
        alert(`Você curtiu o post: ${title}.\nCurtidas: ${likeCount}`);
    }

    return (
        <article>
            <img src={image} alt={title} />

            <p>{category}</p>
            <h2>
                <Link to={`posts/${id}`}>{title}</Link>
            </h2>

            <div>
                <Avatar src={avatar} alt="" />
                <div>
                    <span>{author}</span>
                    <span>{createdAt}</span>
                </div>
            </div>
            <p>{description}</p>
            {children}

            {hasExtraContent ? (
                <button>Leia mais</button>
            ) : (
                <p>Nenhum conteúdo disponível.</p>
            )}

            <Button
                primary
                onClick={() => {
                    handleLike(title);
                }}
            >
                Curtir
            </Button>
        </article>
    );
}
