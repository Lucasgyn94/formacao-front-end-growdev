import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { posts } from "./posts";

export function App() {
    return (
        <>
            <Header />

            <main>
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
            </main>

            <Footer />
        </>
    );
}