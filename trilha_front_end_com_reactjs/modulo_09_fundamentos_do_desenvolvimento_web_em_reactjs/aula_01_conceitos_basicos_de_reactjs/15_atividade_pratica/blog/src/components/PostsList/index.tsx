import type { IPost } from "../../types";
import { Post } from "../Post";

interface PostsListProps {
    posts: IPost[];
}

export function PostsList({ posts }: PostsListProps) {
    return (
        <>
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
        </>
    );
}