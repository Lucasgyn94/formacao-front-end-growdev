import type { JSX } from 'react';
import type { IPost } from '../../types';
import { Article, Avatar, Button, RoundedButton, StyledLink } from './styles';
import { useTheme } from 'styled-components';

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
    const theme = useTheme();
    console.log(theme);

    const hasExtraContent = false;

    let likeCount = 0;

    function handleLike(title: string) {
        likeCount++;
        alert(`Você curtiu o post: ${title}.\nCurtidas: ${likeCount}`);
    }

    return (
        <Article>
            <img src={image} alt={title} />

            <p className="category">{category}</p>
            <h2>
                <StyledLink to={`posts/${id}`}>{title}</StyledLink>
            </h2>

            <div className="post-info">
                <Avatar src={avatar} alt="" />
                <div>
                    <span style={{ color: theme.colors.title }}>{author}</span>
                    <span>{createdAt}</span>
                </div>
            </div>
            <p className="description">{description}</p>
            {children}

            {hasExtraContent ? (
                <button>Leia mais</button>
            ) : (
                <p>Nenhum conteúdo disponível.</p>
            )}

            <div className="post-actions">
                <Button onClick={() => handleLike(title)}>Curtir</Button>
                <RoundedButton $primary as="a" href="#">
                    Compartilhar
                </RoundedButton>
            </div>
        </Article>
    );
}
