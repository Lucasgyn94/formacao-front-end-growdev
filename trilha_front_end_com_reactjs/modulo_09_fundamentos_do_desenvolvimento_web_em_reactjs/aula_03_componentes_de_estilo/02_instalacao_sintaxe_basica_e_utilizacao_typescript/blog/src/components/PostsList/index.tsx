import type { IPost } from '../../types';
import { Post } from '../Post';
import { Container, Title, Wrapper } from './styles';

interface PostsListProps {
    posts: IPost[];
}

export function PostsList({ posts }: PostsListProps) {
    return (
        <Wrapper>
            <Container>
                <Title>
                    <h1>Posts Recentes</h1>
                    <span>Escolhemos a dedo nossos artigos favoritos.</span>
                </Title>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        image={post.image}
                        category={post.category}
                        avatar={post.avatar}
                        author={post.author}
                        createdAt={post.createdAt}
                        description={post.description}
                    />
                ))}
            </Container>
        </Wrapper>
    );
}
