import type { ChangeEvent, FormEvent } from 'react';
import { posts } from '../../posts';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { PostsList } from '../../components/PostsList';
import { Container, FormWrapper } from './styles';

export function Home() {
    let filterText = '';

    function handleFilterChange(event: ChangeEvent<HTMLInputElement>) {
        filterText = event.target.value.toLowerCase();

        console.log(`Texto do filtro: ${filterText}`);
    }

    function handleFormSubmit(event: FormEvent) {
        event.preventDefault();

        const filteredPosts = posts.filter((post) =>
            post.title.toLowerCase().includes(filterText),
        );

        console.log(`Posts filtrados: `, filteredPosts);
    }

    return (
        <>
            <Header />

            <FormWrapper onSubmit={handleFormSubmit}>
                <Container>
                    <input
                        type="text"
                        placeholder="Filtrar posts por título"
                        onChange={handleFilterChange}
                    />
                    <button>Filtrar</button>
                </Container>
            </FormWrapper>

            <main>
                <PostsList posts={posts} />
            </main>

            <Footer />
        </>
    );
}
