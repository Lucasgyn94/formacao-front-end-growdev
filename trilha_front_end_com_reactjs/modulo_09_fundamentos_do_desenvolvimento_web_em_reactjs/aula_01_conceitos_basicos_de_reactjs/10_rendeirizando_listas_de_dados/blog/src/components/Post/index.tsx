import type { JSX, ReactNode } from "react";

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

export function Post({author,avatar,category,createdAt,description,image,title = "Post Sem título", children}  : PostProps): JSX.Element {
    const hasExtraContent = true;

    return (
        <article>
            <img
                src={image}
                alt={title}
            />

            <p>{category}</p>
            <h2>{title}</h2>

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
        </article>
    );
}
