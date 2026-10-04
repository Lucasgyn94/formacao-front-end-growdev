import type { JSX, ReactNode } from "react";
import { Link } from "react-router-dom";

interface PostProps {
    id: number,
    image: string,
    category: string
    title?: string,
    description: string,
    author: string,
    avatar: string,
    createdAt: string,
    children?: ReactNode
}

export function Post({id, author,avatar,category,createdAt,description,image,title = "Post Sem título", children}  : PostProps): JSX.Element {
    
    const hasExtraContent = true;

    function handleLike (title: string) {
        alert(`Você curtiu o post: ${title}`);
    }

    return (
        <article>
            <img
                src={image}
                alt={title}
            />

            <p>{category}</p>
            <h2>
                <Link to={`posts/${id}`}>
                    {title}
                </Link>
            </h2>

            <div>
                <img src={avatar} alt="" />
                <div>
                    <span>{author}</span>
                    <span>{createdAt}</span>
                </div>
            </div>
            <p>{description}</p>
            {children}

            { hasExtraContent ? (
                <button>Leia mais</button>
            ) : ( 
                <p>Nenhum conteúdo disponível.</p>
            ) }

            <button onClick={() => {handleLike(title)}}>Curtir</button>
        </article>
    );
}

