import { useState, type ChangeEvent, type FormEvent } from 'react';
import { posts } from '../../posts';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { PostsList } from '../../components/PostsList';
import { Container, FormWrapper } from './styles';

export function Home() {
    // let filterText = '';
    const [filterText, setFilterText] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(posts);

    function handleFilterChange(event: ChangeEvent<HTMLInputElement>) {
        // filterText = event.target.value.toLowerCase();
        // console.log(`Texto do filtro: ${filterText}`);
        setFilterText(event.target.value);
    }

    function handleFormSubmit(event: FormEvent) {
        event.preventDefault();

        // const filteredPosts = posts.filter((post) =>
        //     post.title.toLowerCase().includes(filterText),
        // );

        // console.log(`Posts filtrados: `, filteredPosts);
        const filtered = posts.filter((post) =>
            post.title?.toLowerCase().includes(filterText.toLowerCase()),
        );
        setFilteredPosts(filtered);
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
                <PostsList posts={filteredPosts} />
            </main>

            <Footer />
        </>
    );
}
